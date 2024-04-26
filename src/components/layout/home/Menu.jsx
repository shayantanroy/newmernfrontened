import React from 'react'
// import menupic from "../../../assets/bg.svg"
import pannerpizza from"../../.././assets/istockphoto-1289239033-1024x1024.jpg"
import vegpizza from"../../.././assets/istockphoto-1364746844-1024x1024.jpg"
import chickenpizza from"../../.././assets/istockphoto-1364746844-1024x1024.jpg"
import MenuCard from './MenuCard'

import Footer from '../Footer'
import {useSelector,useDispatch} from "react-redux"
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const Menu = ({isAuthenticated}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const cardhandler=(itemnumber)=>{
    if(isAuthenticated){
    if(itemnumber===2){
      dispatch({type:"vegcheesepizaaIncrement"})
      dispatch({type:"calculatePrice"})
      toast.success("Added To Cart");

    }else if(itemnumber===3){
      dispatch({type:"chickencheesepizzaIncrement"})
      dispatch({type:"calculatePrice"})
      toast.success("Added To Cart");

    }
    else{
      dispatch({type:"pannerPizzaIncrement"})
      dispatch({type:"calculatePrice"})
      toast.success("Added To Cart");

    }
  }else{
    toast.error("Not Logged In")
  }
   

  }
  return (
    <>
    <section className='menu'>
      < h1 style={{fontFamily:"cursive",  color:"violate"}}>MENU</h1>
      <div>
      <MenuCard 
      itemnumber={1}
      foodpic={pannerpizza}
      price={199}
      title="pannerPizza"
      handler={cardhandler}
      delay={0.2}
      />
         <MenuCard 
      itemnumber={2}
      foodpic={vegpizza}
      price={129}
      title="vegcheesepizaa"
      handler={cardhandler}
      delay={0.5}
      />
         <MenuCard 
      itemnumber={3}
      foodpic={chickenpizza}
      price={299}
      title="chickencheesepizza"
      handler={cardhandler}
      delay={0.8}
      />
      </div>
    
   
    </section>

    </>
  )
}

export default Menu
