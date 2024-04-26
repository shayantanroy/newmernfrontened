import React from 'react'
import{AiFillInstagram,AiFillTwitterCircle,AiFillFacebook} from "react-icons/ai"
import {IoFastFoodOutline}from "react-icons/io5"
import {motion} from"framer-motion";

const Footer = () => {
  return (
   <section className='footer'>
    <div className='description'>
    <motion.div className='img' initial={{x:"-100%"} } whileInView={{x:0}}>
     <IoFastFoodOutline/>
     </motion.div>

      <h1>B.Tech Food Wala</h1><br></br>
      <p>we are providing you a testy and healthy food</p>
      <p>we give attention to genuin feedback</p><br></br>
      <h4>All rights reserved by<span style={{color:"black"}}> @</span>B.Tech Food Wala</h4>
    </div>

    <div className='contact'>
    <h4>Contact US : 89671157181</h4>
    <h4 style={{paddingTop:"2px"}}>Follow us On:</h4>
    <div>
      <a href='https://twitter.com/KumarShayantan'><AiFillInstagram/></a>
      <a href='https://twitter.com/KumarShayantan'><AiFillTwitterCircle/></a>
      <a href='https://twitter.com/KumarShayantan'><AiFillFacebook/></a>
      

    </div>
   <a style={{color:"white"}} href='/'> <h3>shayantanroy100@gmail.com</h3></a>



    </div>
   </section>
  )
}

export default Footer
