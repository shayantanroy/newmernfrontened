import React,{useState} from 'react'
import {Country,State} from "country-state-city"
import { Link, useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"
import Footer from './layout/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addShippingInformation } from '../redux/actions/Shippingaction'

const Shipping = () => {
  const option={
    initial:{
      y:-100,
      opacity:0
    },
    whileInView:{
      y:0,
      opacity:1
    },
    transition:{
      delay:0.4
    }
  }


  const{shippingInfo}=useSelector((state)=>state.cart);


  const [houseNo, setHNo] = useState(shippingInfo.houseNo);
  const [city, setCity] = useState(shippingInfo.city);
  const [country, setCountry] = useState(shippingInfo.country);
  const [state, setState] = useState(shippingInfo.state);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const dispatch=useDispatch();
  const navigate=useNavigate();


  const submithandler=(e)=>{
    e.preventDefault();
  //   dispatch({type:"addShippingInfo",
  //   payload:{
  //     houseNo,
  //     city,
  //     country,
  //     state,
  //     phoneNo,
  //     pinCode
  //   }
  // });
  dispatch(addShippingInformation(
        houseNo,
        city,
        country,
        state,
        phoneNo,
        pinCode
      ));

  localStorage.setItem(
    "shippingInfo",
    JSON.stringify({houseNo,
      city,
      country,
      state,
      phoneNo,
      pinCode
  })
  );


  navigate("/confrimorder")
  
  }






  return (
    <>
    <section  className='shipping'>
        <motion.main {...option}>
            <h1>SHIPING DETAILS</h1>
            <form onSubmit={submithandler}>
                <div>
                    <label for="H.No.">House.No.</label>
                    <input type='text'
                     placeholder='Enter the House No.'
                      id='H.No.'
                      value={houseNo}
                      required
                      onChange={(e)=>setHNo(e.target.value)}/>
                      
                </div>
                <div>
                    <label for="city">
                        City
                    </label>
                    <input type='text'
                     placeholder='Enter city'
                      id='city'
                      value={city}
                      required
                      onChange={(e)=>setCity(e.target.value)}/>
                </div>
                <div>
                    <label for="country">Country</label>
                  <select
                  value={country}
                  required
                  onChange={(e)=>setCountry(e.target.value)}>
                    <option value=" " >Country</option>
                    {Country && Country.getAllCountries().map((item)=>(
                        <option value={item.isoCode} key={item.isoCode}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                    <label>state</label>
                    <select
                    value={state}
                    required
                    onChange={(e)=>setState(e.target.value)}>
                        <option value=" ">State</option>
                        {State && State.getStatesOfCountry("IN").map((item)=>(
                            <option value={item.isoCode} key={item.isoCode}>{item.name}</option>
                        ))}
                     
                    </select>
                    </div>
        <div>
            <label>Pin Code</label>
            <input type="number" 
            placeholder="Enter Pincode"
            value={pinCode}
            required
            onChange={(e)=>setPinCode(e.target.value)}
             />
          </div>
          <div>
            <label>Phone No.</label>
            <input type="number" 
            placeholder="Enter Phone No."
            value={phoneNo}
            required
            onChange={(e)=>setPhoneNo(e.target.value)}
             />
          </div>

        
         <button type='Submit' >Confrim Order</button>

            </form>
        </motion.main>

      
    </section>
   
    </>
  )
}

export default Shipping
