import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import{useDispatch,useSelector} from "react-redux";
import { getAdminOrders, getAdminUsers } from '../../redux/actions/Adminaction';

import Loder from"../layout/Loader"
const Adminusers = () => {


    const{loading,users,error}=useSelector(state=>state.admin);
    const dispatch=useDispatch();



    useEffect(()=>{
        dispatch(getAdminUsers())

    },[dispatch])
  return (
    <section className='adminusers'>
        {loading===false?
        <main>
        <h1>Admin Users</h1><br></br>
            <table>
                <thead>
                    <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Role</th>
                    <th>Login</th>
                    </tr>


                </thead>
                <tbody>
                    {users&&users.map((i)=>(
                    <tr>
                        <td>{i._id}</td>
                        <td>{i.name} </td>
                        <td>
                            <img src={i.photo} alt='user'/>
                            
                        </td>
                        <td>{i.role}</td>
                        <td>{i.createdAt.split("T")[0]}</td>



                    </tr>
                    ))}
                </tbody>
            </table>
        </main>
        :
        <Loder/>}
      
    </section>
  )
}

export default Adminusers
