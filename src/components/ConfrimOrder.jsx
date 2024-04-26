import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import Footer from './layout/Footer'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearerror, createorder, paymentveryfication, resetmessage } from '../redux/actions/Orderaction'
import toast from 'react-hot-toast'
import axios from 'axios'
import { server } from '../redux/Store'
const ConfrimOrder = () => {
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
  };

  const[paymentmethod, setPaymentmethod]=useState("");
  const[disablebtn,setDisablebtn]=useState(false);


  const dispatch=useDispatch();
  const navigate=useNavigate();

  const{cartItems,subTotal,shippingCharges,total,shippingInfo}=useSelector((state)=>state.cart)
const{message,error}=useSelector((state)=>state.order);


const submitHandler = async (e) => {
  e.preventDefault();
  setDisablebtn(true);
  if (paymentmethod === "COD") {
    dispatch(
      createorder(
        shippingInfo,
        cartItems,
        paymentmethod,
        subTotal,
        shippingCharges,
        total
      )
    );
  } else {
    // createorderonline

    const {
      data: { order, orderOptions },
    } = await axios.post(
      `${server}/placeorderonline`,
      {
        shippingInfo,
        orderItems: cartItems,
        paymentMethod:paymentmethod,
        itemsPrice: subTotal,
        shippingCharges,
        totalAmount: total,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    const options = {
      key: "rzp_test_JlZ4cJ8Cn6Q4Ko",
      amount: order.amount,
      currency: "INR",
      name: "Btech Pizza Wala",
      description: "Pizza App",
      order_id: order.id,
      handler: function (response) {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
          response;

        dispatch(
          paymentveryfication(
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
            orderOptions
          )
        );
      },

      theme: {
        color: "#9c003c",
      },
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  }
};





  


useEffect(()=>{
  if(message){
    toast.success(message);
    dispatch(resetmessage());
    dispatch({type:"emptyState"})
    navigate("/successpay")
  }
  if(error){
    toast.error(error);
    dispatch(clearerror());
   setDisablebtn(false);
  }
},[message,dispatch,error])







  return (
    <>
    <section className='confrimorder'>
        <motion.main {...option}>
        <h1>Confirm Order</h1>

        <form onSubmit={submitHandler}>
      <div>
         <label>Cash On Delivery</label>
        <input type="radio" name="payment" 
        onChange={()=>setPaymentmethod("COD")}
        required
        />
      </div>
      <div>
          <label>Online</label>
          <input type="radio" name="payment"
                  onChange={()=>setPaymentmethod("Online")}
                  required
                  />
      </div>

         <button type="submit" disabled={disablebtn}>Place Order</button>
        </form>

        </motion.main>
      
    </section>
  
    </>
  )
}

export default ConfrimOrder
