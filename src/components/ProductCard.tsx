import type { Product } from '../types'

interface Props {
  product: Product
  addToCart: (product: Product) => void
}

const ProductCard = ({ product, addToCart }: Props) => {
  const { author, img, price, title } = product

  return (
    <div className="w-full flex flex-col bg-gray-200 rounded-md">
      <div className="flex items-center justify-center my-4 pb-4 border-b-2 border-b-gray-500">
        <img src={img} alt={title} className="rounded-md shadow-2xl" />
      </div>

      <div className="mb-4 px-2 flex flex-col flex-grow">
        <h2 className="font-bold text-lg">{title}</h2>
        <p>{author}</p>
        <p>Price - ${price}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-auto px-4 py-2 rounded-md font-semibold bg-sky-300"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
