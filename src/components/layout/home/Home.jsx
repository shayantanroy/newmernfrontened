import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import Founder from '../Founder'
import {IoFastFoodOutline}from "react-icons/io5"
import Footer from '../Footer'


const Home = () => {
  const option={
    initial:{
      x:-100,
      opacity:0
    },
    whileInView:{
      x:0,
      opacity:1
    }
  }


  return (
    <>
    <section className='home'>
      <div>
        <motion.h1 {...option}>B.Tech Pizza Wala</motion.h1>
        <motion.p {...option} transition={{delay:0.2}}>Give yourself a testy and healthy Food</motion.p>
       
      </div>
      <Link to="/menu">
      <motion.button 

          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          Explore Menu
        </motion.button>
        </Link>
    </section>
    <Founder/>
    
    
    </>
  )
}

export default Home

