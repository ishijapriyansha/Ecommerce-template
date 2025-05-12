import React, { useState } from 'react'
import Item from './Item';
const items = [
    {'name': "name1", "desc": "desc1"},
    {'name': "name2", "desc": "desc2"},
    {'name': "name3", "desc": "desc3"},
    {'name': "name4", "desc": "desc4"},
    {'name': "name5", "desc": "desc5"},
    {'name': "name6", "desc": "desc6"},
    {'name': "name7", "desc": "desc7"},
    {'name': "name8", "desc": "desc8"},
    {'name': "name9", "desc": "desc9"},
    {'name': "name10", "desc": "desc10"},
    {'name': "name11", "desc": "desc11"},
    {'name': "name12", "desc": "desc12"}
];

export default function Products() {
    const [cart, setCart]=useState([]);
    const AddtoCart=(item)=>{
        setCart([...cart, item])
    }
  return (<>
    <div className='grid grid-cols-4 gap-4'>
            {items.map((item)=>(<Item key={item.name} name={item.name} desc={item.desc} onAddToCart={()=>AddtoCart(item)} />)
                    )}

    </div>
    <div className="mt-6">
        <h2 className="text-lg font-bold">Cart:</h2>
          {cart.map((item) => (
            <span key={item.name}>{item.name} &nbsp;</span>
          ))}
        
      </div>
    </>
  )
}
