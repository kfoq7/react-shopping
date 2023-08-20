import { useEffect, useState } from 'react'
import type { Product } from '../types'

type AmountChange = 'increase' | 'decrease'

interface Props {
  cart: Product[]
  updateCart: (products: Product[]) => void
}

const Cart = ({ cart, updateCart }: Props) => {
  const [totalPrice, setTotalPrice] = useState(0)

  const handleDeleteItem = (id: number) => {
    const newCart = cart.filter(item => item.id !== id)
    updateCart(newCart)
  }

  const handleChangeAmount = (id: number, amount: AmountChange) => {
    const productIndex = cart.findIndex(item => item.id === id)
    const newCart = structuredClone(cart)

    amount === 'increase'
      ? newCart[productIndex].amount++
      : newCart[productIndex].amount--

    if (newCart[productIndex].amount <= 0) {
      handleDeleteItem(newCart[productIndex].id)
      return
    }

    updateCart(newCart)
  }

  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalPrice = cart.reduce((previos, current) => {
        return previos + current.price * current.amount
      }, 0)

      setTotalPrice(totalPrice)
    }

    calculateTotalPrice()
  }, [cart])

  return (
    <article className="m-auto max-w-6xl">
      <div className="flex flex-col">
        {cart.map(({ id, amount, author, img, price, title }) => (
          <div
            key={id}
            className="flex items-center justify-between border-b-2 border-sky-200 my-2"
          >
            <div className="flex items-center justify-center py-2 gap-3">
              <img src={img} className="w-20" />
              <div className="w-[700px]">
                <h2 className="text-xl font-semibold">{title}</h2>
                <span>{author}</span>
              </div>
            </div>

            <div className="w-full flex items-center justify-center gap-4 text-center">
              <button
                className="px-2 rounded-md font-medium bg-gray-300 hover:bg-gray-400"
                onClick={() => handleChangeAmount(id, 'increase')}
              >
                +
              </button>
              <span className="w-6">{amount}</span>
              <button
                className="px-2 rounded-md font-medium bg-gray-300 hover:bg-gray-400"
                onClick={() => handleChangeAmount(id, 'decrease')}
              >
                -
              </button>
            </div>

            <div className="w-full flex items-center justify-end gap-2 pr-4 font-semibold">
              <span className="bg-green-300 rounded-md px-4 py-2 w-20 text-center">
                ${price}
              </span>
              <button
                className="bg-red-400 rounded-md px-4 py-2"
                onClick={() => handleDeleteItem(id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="mb-4 ml-auto text-right flex gap-2 text-lg">
          <span>Total price of your Cart</span>
          <span className="font-semibold">${totalPrice}</span>
        </div>
      </div>
    </article>
  )
}

export default Cart
