import React from 'react'
import { FaUsers } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdCurrencyRupee } from "react-icons/md";
import{useDispatch,useSelector} from "react-redux";

const Box = ({title,value}) => {


  return (
    <div>
        <h3>
       
       {title==="Payment" && "₹"}
            {value}
        </h3>
        <p>
            {title}
        </p>
      
    </div>
  )
}

export default Box
