import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import Footer from './layout/Footer';
import { useDispatch,useSelector } from 'react-redux'
import { clearerror, myorders } from '../redux/actions/Orderaction';
import toast from 'react-hot-toast';
import Loader from "../components/layout/Loader"
const Myorder = () => {
    // const arr = [1, 2, 3, 4,5];

const{orders,error,loading}=useSelector((state)=>state.orders);
const dispatch = useDispatch();
useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearerror());
     
    }

    dispatch(myorders());
  }, [dispatch, error]);




  return (
    <section className='myorder'>
        {loading===false?
        <main>
            <h1>My Orders</h1><br></br>
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Payment</th>
                        <th>Order Details</th>

                    </tr>
                </thead>
                <tbody>
                    
                    {orders && orders.map((i)=>(
                    <tr key={i._id}>
                        <td>#{i._id}</td>
                        <td>{i.orderStatus}</td>
                        <td>
                            {i.orderItems.pannerPizza.quantity+
                        i.orderItems.vegcheesepizaa.quantity+
                        i.orderItems.chickencheesepizza.quantity}
                        
                        </td>
                        <td>₹{i.totalAmount}</td>
                        <td>{i.paymentMethod}</td>
                        <td>
                         <Link to={`/order/${i._id}`}>
                             <AiOutlineEye />
                         </Link>
                </td>
                    </tr>
                    ))}
                </tbody>



        </table>
       






        </main>
         :
         <Loader/>}





        
    </section>
      
    
  )
}

export default Myorder
