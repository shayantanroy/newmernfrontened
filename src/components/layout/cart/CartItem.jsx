import React from 'react'
import {motion} from "framer-motion"

const CartItem = ({title,increment,decrement,img,value}) => {

  return (
    <section  className='cartItem'>
        <div className='a'>
            <h4>{title}</h4>
            <img src={img} alt='Item'/>
           
        </div>

        <div className='b'>
            <button onClick={decrement}>-</button>
            <input type='number'readOnly value={value}/>
            <button onClick={increment}>+</button>
        </div>

      
    </section>
  )
}

export default CartItem
