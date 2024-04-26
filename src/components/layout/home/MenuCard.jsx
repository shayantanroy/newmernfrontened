import React from 'react'
import {motion} from "framer-motion"
const MenuCard = ({itemnumber,foodpic,price,title,handler,delay=0}) => {
  return (
    <motion.div className='menucard'
    initial={{
      x: "-100%",
      opacity: 0,
    }}
    whileInView={{
      x: 0,
      opacity: 1,
    }}
    transition={{
      delay,
    }}
>
        <div>
          Item {itemnumber}
        </div>
        <main>
          <img src={foodpic} alt={itemnumber}/>
          <h5>₹{price}</h5>
          <p>{title}</p>
          <button onClick={()=>handler(itemnumber)}>Buy Now</button>
        </main>

        
    </motion.div>
    
  )
}

export default MenuCard
