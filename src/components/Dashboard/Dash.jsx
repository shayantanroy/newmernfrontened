import React, { useEffect } from 'react'
import Box from './Box'
import {Link}from "react-router-dom"
import Loader from '../layout/Loader';
import{Doughnut} from "react-chartjs-2";
import{useDispatch,useSelector} from "react-redux";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import { getAdminStats } from '../../redux/actions/Adminaction';
ChartJS.register(Tooltip, ArcElement, Legend);

const Dash = () => {
const dispatch=useDispatch();
const{loading, usersCount,ordersCount,totalIncome}=useSelector((state)=>state.admin)
useEffect(()=>{
  dispatch(getAdminStats());
 

},[dispatch])



  const data={
labels:["Preparing", "Shipped", "Delivered"] ,
datasets:[{
  label: "# of orders",
  data: ordersCount?[ordersCount.preparing
    ,ordersCount.shipped,ordersCount.delivered]
    :[0,0,0],
  backgroundColor:[
    "rgba(159,63,176,0.1)",
     "rgba(78,63,176,0.2)",
     "rgba(156,0,60,0.3)",
  ],
  borderColor:["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"]
  ,
  borderWidth:1,
  }]

}



  return (
    <section className='dashboard'>
      {loading===false?
        <main>
            <div className='visual-item'>
               {/* <Box title={"User"}  value={usesrCount}/>
               <Box title={"Order"} value={ordersCount.total} />
               <Box title={"Income"} value={totalIncome}/> */}
               <Box title="User" value={ usersCount} />
            <Box title="Order" value={ordersCount.total} />
            <Box title="Income" value={totalIncome} />

            </div>
            <section>
              <div>
                <Link to="/admin/orders">Views Orders</Link>
                <Link to="/admin/users">Views Users</Link>

              </div>
              <article>
                <Doughnut data={data}/>
              </article>

            </section>
        </main>
        :
        <Loader/>}
      
    </section>
  )
}

export default Dash

