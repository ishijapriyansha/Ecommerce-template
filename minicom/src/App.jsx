import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Products from './Products'
import Cart from './Cart'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState(()=>{
    const currentCart=localStorage.getItem('cart');
    return currentCart?JSON.parse(currentCart):[];
  }); 


  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart));
  },[cart])
  return (
    <>
     <Router>
     <Routes>
     <Route path="/" element={<Products cart={cart} setCart={setCart} />} />
     <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
     </Routes>
     </Router>
    </>
  )
}

export default App
