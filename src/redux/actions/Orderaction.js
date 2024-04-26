import axios from "axios";
import { server } from "../Store";


export const createorder=( 
  shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    shippingCharges,
    totalAmount
)=>async(dispatch)=>{
    try{
        dispatch({
            type: "createOrderRequest",
          });
          const{data}=await axios.post(`${server}/createorder`,{
            shippingInfo,
            orderItems,
            paymentMethod,
            itemsPrice,
            shippingCharges,
            totalAmount
        },
            {
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              }
              )
              dispatch({
                type: "createOrderSuccess",
                payload: data,
              });
            } catch (error) {
              dispatch({
                type: "createOrderFail",
                payload: error.response.data.message,
              });
            }
          };


export const paymentveryfication=( 
  razorpay_payment_id,
  razorpay_order_id,
  razorpay_signature,
  orderOptions)=>async(dispatch)=>{
  try {
    dispatch({
      type: "paymentVerificationRequest",
    });

    const { data } = await axios.post(
      `${server}/paymentverification`,
      {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        orderOptions,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "paymentVerificationSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "paymentVerificationFail",
      payload: error.response.data.message,
    });
  }
}



export const myorders=()=>async(dispatch)=>{
  try{
    dispatch({type:"ordersreq"});
    const{data}=await axios(`${server}/myorders`, {
      withCredentials: true,})

    dispatch({type:"orderssucc",
  payload:data})
  
  }catch(error){
    dispatch({type:"ordersfail",
  payload:error.response.data.message})
  }
}


// user order details

export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getOrderDetailsRequest" });

    const { data } = await axios.get(`${server}/order/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: "getOrderDetailsSuccess", payload: data.order });
  } catch (error) {
    dispatch({
      type: "getOrderDetailsFail",
      payload: error.response.data.message,
    });
  }
};

// message and error mangement in the state
          export const resetmessage =()=>async(dispatch)=>{
            dispatch({
              type:"clearMessage"
            })
          };
          export const clearerror=()=>async(dispatch)=>{
            dispatch({
              type:"clearError"
            })
          }