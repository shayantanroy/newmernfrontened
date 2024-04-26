import axios from "axios";
import { server } from "../Store";


 export const addShippingInformation =( houseNo,
    city,
    country,
    state,
    phoneNo,
    pinCode)=>async(dispatch)=>{

    dispatch({type:"addShippingInfo",
 payload:{
        houseNo,
        city,
        country,
        state,
        phoneNo,
        pinCode
      }});

 }