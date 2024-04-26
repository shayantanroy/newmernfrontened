import React from 'react'
import {motion} from "framer-motion"
import me from "../assets/b.tech food wala pics/pngwing.com.png"
import Footer from './layout/Footer'

const Contact = () => {
  return (
    <>
    <section className='Contact'>
        <motion.main
        initial={{x:"-100%",opacity:0}}
   
        whileInView={{x:0,opacity:1}}
        transition={{delay:0.2}}
        

         className='part1'>
            <h1>Contact Us</h1>
            <div>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email'/>
                <textarea placeholder='Message'  rows='10' ></textarea>
                <button>Send</button>
            </div>    
        </motion.main>
        <motion.main
               initial={{x:"100%",opacity:0}}
   
               whileInView={{x:0,opacity:1}}
               transition={{delay:0.5}} className='part2'>
                <motion.img 
                  initial={{
                    y: "-100%",
                    x: "50%",
                    opacity: 0,
                  }}
                  animate={{
                    x: "50%",
                    y:"-25%",
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1,
                  }}
                 src={me} />


           
        </motion.main>
        
      
    </section>
  
    </>
  )
}

export default Contact
