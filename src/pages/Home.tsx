import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../lib/data'
import type { Product } from '../types'

interface Props {
  cart: Product[]
  updateCart: (newCart: Product[]) => void
}

const Home = ({ cart, updateCart }: Props) => {
  const [warning, setWarning] = useState(false)

  const handleAddToCart = (product: Product) => {
    if (cart.some(item => item.id === product.id)) {
      setWarning(true)

      setTimeout(() => {
        setWarning(false)
      }, 3000)

      return
    }

    const newProduct = {
      ...product,
      amount: 1
    }

    updateCart([...cart, newProduct])
  }

  return (
    <section>
      {warning && (
        <div className="flex items-center justify-center mx-auto max-w-md mt-4 py-4 rounded-lg bg-yellow-200 shadow-md font-semibold">
          <p className="">Item is already added to your cart</p>
        </div>
      )}

      <div className="m-auto max-w-screen-xl">
        <div className="grid md:grid-cols-4 gap-4 py-5 px-2">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
