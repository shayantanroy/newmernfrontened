import React, { useEffect, useState } from 'react'
import img1 from "../../../assets/b.tech food wala pics/pexels-dmitry-zvolskiy-1721932.jpg"
import { Link, useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"
import Footer from '../Footer'
import { server } from '../../../redux/Store'

import {useSelector,useDispatch} from "react-redux"
import CartItem from './CartItem'
import toast from 'react-hot-toast'
import { clearerror, resetmessage } from '../../../redux/actions/Useraction'

const Cart = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate();

  const {
    cartItems:{
      vegcheesepizaa:{
        quantity:vegcheesepizaa
      },
      chickencheesepizza:{
        quantity:chickencheesepizza
      },
      pannerPizza:{
        quantity:pannerPizza
      },
    },
    subTotal,
    shippingCharges,
    total,
      
      
  }=useSelector(state=>state.cart);


  const{cartItems}=useSelector(state=>state.cart);

  


    const option={
      initial:{
        y:-100,
        opacity:0
      },
      
      whileInView:{
        y:0,
        opacity:1
      },
      transition:{
        delay:0.4
      }
    }
  // }


const vegincre=()=>{
  dispatch({type:"vegcheesepizaaIncrement"})
  dispatch({type:"calculatePrice"})

  // dispatch({type:"calculateprice"})
}
const paneerincre=()=>{
  dispatch({type:"pannerPizzaIncrement"})
  dispatch({type:"calculatePrice"})
}
const chicekenpizzaincrease=()=>{
  dispatch({type:"chickencheesepizzaIncrement"})
  dispatch({type:"calculatePrice"})
}
// for decrement
const vegdecre=()=>{
  if(vegcheesepizaa>0){
  dispatch({type:"vegcheesepizaaDecrement"})
  dispatch({type:"calculatePrice"})
  }
  // dispatch({type:"calculateprice"})
}
const paneerdecre=()=>{
  if(pannerPizza>0){
  dispatch({type:"pannerPizzaDecrement"})
  dispatch({type:"calculatePrice"})
}

}
const chicekenpizzadecrease=()=>{
  if(chickencheesepizza>0){
  dispatch({type:"chickencheesepizzaDecrement"})
  dispatch({type:"calculatePrice"})
  }
}


useEffect(()=>{
  localStorage.setItem("cartItems",JSON.stringify(cartItems));
  localStorage.setItem("cartPrices",JSON.stringify({
    subTotal,shippingCharges,total
  }))

 
},[subTotal,shippingCharges,total,cartItems,

]);








  return (
    <>
    <section  className='cart'>
       
        <motion.main {...option}>
          
            <CartItem
            title={"vegcheesePizza"}
           img={img1}
            value={vegcheesepizaa}
            increment={vegincre}
            decrement={vegdecre}/>
{/*           
            <div>
            <button onClick={remove}>Remove</button>

            </div> */}
            
             <CartItem
            title={"pannerPizza"}
            img={img1}
            value={pannerPizza}
            increment={paneerincre}
            decrement={paneerdecre}/>
            {/* <div>
              <button onClick={remove}>Remove</button>
            </div> */}

             <CartItem
            title={"chickencheesepizza"}
            img={img1}
            value={chickencheesepizza}
            increment={chicekenpizzaincrease}
            decrement={chicekenpizzadecrease}/>
          {/* <div> 
            <button onClick={remove}>Remove</button>
            </div> */}

       

        <div className='price'>
        <div>
            <h4>subTotal</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to={"/shipping"}>CheckOut</Link>
        </div>

        </motion.main>

    </section>
    {/* <Footer/> */}
    </>
  )
}

export default Cart
                                                                                       