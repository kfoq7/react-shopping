import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import type { Product } from './types'

const App = () => {
  const [cart, setCart] = useState<Product[]>([])

  return (
    <div className="w-full min-h-screen bg-gray-100 ">
      <Navbar amount={cart.length} />

      <Routes>
        <Route path="/" element={<Home cart={cart} updateCart={setCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} updateCart={setCart} />}
        />
      </Routes>
    </div>
  )
}

export default App
