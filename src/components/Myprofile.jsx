import React from 'react'
import profilepic from "../assets/20201220153509306.png"
import Footer from './layout/Footer'
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { loadUser, logout, resetmessage } from '../redux/actions/Useraction'
import toast from "react-hot-toast";
import {  useNavigate } from 'react-router-dom';
import Loader from './layout/Loader'


const Myprofile = () => {


const dispatch=useDispatch();
  const {user,loading,message}=useSelector((state)=>state.auth);
let navigate=useNavigate();




const logouthandler=()=>{
 
  dispatch(logout()); 
 
    // toast.success(message);
  
dispatch({type:"emptyState"});
 
};




const orderhandler=()=>{
  navigate("/order")

}

const submitgo=()=>{
  navigate("/dashboard")
}

useEffect(()=>{
  dispatch(loadUser());
},[dispatch])


  return (
   
    <section className='profile' >
       {loading===false ?
      
       <main>
            <h1>MY PROFILE</h1>
            <div>
            <img src={user.photo}  alt="user" referrerPolicy='no-referrer'/><br></br>
                <h3>{user.name}</h3>
                <button className='orders' onClick={orderhandler}>My Orders</button>
                {user.role==="admin"&&
                <button onClick={submitgo}>Dash Board</button>
                
      }
                <button onClick={logouthandler}>Log Out</button>
            </div>
        </main>
           :(
            <Loader/>
        )}
     
    </section>

   
  )
}

export default Myprofile
