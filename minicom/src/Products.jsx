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
const [cart, setCart]=useState([]);

const AddtoCart=()=>{
    setCart([...cart,item]);
}
export default function Products() {
  return (
    <div className='grid grid-cols-4 gap-4'>
            {items.map((item)=>(<Item name={item.name} desc={item.desc}/>)
                    )}

    </div>

  )
}
