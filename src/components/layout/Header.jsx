import React from 'react'
import { Link } from 'react-router-dom'
import {IoFastFoodOutline}from "react-icons/io5"
import { FaUser } from "react-icons/fa"
import{FiShoppingCart,FiLogIn} from"react-icons/fi"
import {motion} from "framer-motion"
import { server } from '../../redux/Store'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import {useSelector,useDispatch} from "react-redux"
import { clearerror } from '../../redux/actions/Useraction'
const Header = ({isAuthenticated}) => {
    
  const{error,message}=useSelector((state)=>state.auth)

const navigate=useNavigate();
const dispatch=useDispatch()

const submithandler=()=>{
  window.open(`${server}/googlelogin`,"_self")
  
};
const homehandler=()=>{
  navigate("/")
  
}
const submitcart=()=>{
  if(!isAuthenticated){
    
      // toast.error(error);
      toast.error("Not Logged In")
   dispatch({type:"emptyState"})
      
    
    
  }
}

  return (
  <nav>
   <motion.div onClick={homehandler} initial={{x:"-100%"} } whileInView={{x:0}}>
     <IoFastFoodOutline />
     </motion.div>
   
    <div className='roy'> 
        <Link to="/">Home</Link>
        <Link to="/contact">Contacts</Link>
        <Link to="/menu" >Menu</Link>
        <Link to="/cart" onClick={submitcart}><FiShoppingCart/></Link>
      
         {isAuthenticated===true ?
        <Link to="/myprofile"><FaUser/></Link>
        :
        <Link onClick={submithandler}><FiLogIn/></Link>} 
        


        {/* <Link to={isAuthenticated?"/myprofile":"/login"}>{isAuthenticated?<FaUser/>:<FiLogIn onClick={submithandler}/>}</Link> */}


    </div>
  </nav>
  )
}

export default Header
