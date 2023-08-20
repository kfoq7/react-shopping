import { useNavigate } from 'react-router-dom'

interface Props {
  amount: number
}

const Navbar = ({ amount }: Props) => {
  const navigate = useNavigate()

  return (
    <nav className="w-full p-4 bg-sky-600">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <h1
            className="text-lg text-white font-semibold cursor-pointer"
            onClick={() => navigate('/')}
          >
            My shooping
          </h1>

          <div
            className="flex gap-2 cursor-pointer text-white bg-sky-300 p-2 rounded-md"
            onClick={() => navigate('/cart')}
          >
            <span className="text-md font-semibold">{amount}</span>
            <span className=" text-center flex items-center justify-center">
              <span className="material-symbols-outlined">shopping_cart</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
