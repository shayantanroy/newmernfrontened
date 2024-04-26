import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";
import{useDispatch,useSelector} from "react-redux";
import { clearerror, getAdminOrders, processOrder, resetmessage } from '../../redux/actions/Adminaction';
import toast from "react-hot-toast"

import Loader from '../layout/Loader';
const Adminorders = () => {
    const {loading,orders,error,message}=useSelector((state)=>state.admin)
    const dispatch=useDispatch();






const submitActionprocess=(id)=>{
    dispatch(processOrder(id));
}

    useEffect(()=>{
        if(message){
            toast.success(message);
           dispatch(resetmessage())

            
        }
        if(error){
            toast.error(error);
            dispatch(clearerror())
        }
        dispatch(getAdminOrders());
    },[dispatch,message,error]);


    
  return (
    <section className='myorder'>
        {loading===false?(
          <main>
        <h1>Admin Users</h1><br></br>
            <table>
                <thead>
                    <tr>
                    <th>Order Id</th>
                    <th>Status</th>
                    <th>Qauntity</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>User</th>
                    <th>Action</th>
                    </tr>

                </thead>
                <tbody>
                    {orders&&orders.map((i)=>(
                
                    <tr>
                        <td>{i._id }</td>
                        <td>{i.orderStatus} </td>
                        <td>
                        {i.orderItems.pannerPizza.quantity+
                        i.orderItems.vegcheesepizaa.quantity+
                        i.orderItems.chickencheesepizza.quantity}
                        </td>
                        <td>{i.totalAmount}</td>
                        <td>{i.paymentMethod} </td>
                        <td>{i.user.name} </td>
                        <td>
                            <Link to={`/order/${i._id}`}>
                            <AiOutlineEye />
                            </Link>
                            <button onClick={()=>submitActionprocess(i._id)} >
                            <GiArmoredBoomerang />
                            </button>
                            
                             </td>

                    </tr>
                    ))}
                </tbody>
            </table>
        </main>
        ):(
          <Loader/>
        )
    }
      
      
    </section>
  )
}

export default Adminorders
