import React,{useState} from 'react'

export default function Cart({cart,setCart}) {
  return (
    <>
    <div>
       {cart.length === 0 ? (
        <p> Empty Cart</p>
       ):
       (cart.map((cartItem)=>(
        <div key={cartItem.name}>
            <ul className="list-disc">
        <li><p>{cartItem.name}</p></li></ul>
        {/* <p> {cartItem.desc}</p> */}
        </div>
        
       )))
       } 
    </div>
    <div>
        <button onClick={()=>{
            localStorage.removeItem('cart');
            setCart([]);
        }}> Clear Cart</button>
    <button >Place Order</button>
    </div>
    </>
  )
}
