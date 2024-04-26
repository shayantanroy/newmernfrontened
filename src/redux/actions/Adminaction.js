import axios from "axios";
import {server}from "../Store";


export const getAdminStats = () => async (dispatch) => {
    try {
      dispatch({ type: "getDashboardStatsRequest" });
  
      const { data } = await axios.get(`${server}/admin/stats`, {
        withCredentials: true,
      });
  
      dispatch({ type: "getDashboardStatsSuccess",
      payload: data
     });
    } catch (error) {
      dispatch({
        type: "getDashboardStatsFail",
        payload: error.response.data.message,
      });
    }
  };

  export const getAdminUsers = () => async (dispatch) => {
    try {
      dispatch({ type: "getAdminUsersRequest" });
  
      const { data } = await axios.get(`${server}/admin/users`, {
        withCredentials: true,
      });
  
      dispatch({ type: "getAdminUsersSuccess",
       payload: data });
    } catch (error) {
      dispatch({
        type: "getAdminUsersFail",
        payload: error.response.data.message,
      });
    }
  };


  export const getAdminOrders = () => async (dispatch) => {
    try {
      dispatch({ type: "getAdminOrdersRequest" });
  
      const { data } = await axios.get(`${server}/admin/orders`, {
        withCredentials: true,
      });
  
      dispatch({ type: "getAdminOrdersSuccess",
       payload: data 
    });
    } catch (error) {
      dispatch({
        type: "getAdminOrdersFail",
        payload: error.response.data.message,
      });
    }
  };



  export const processOrder = (id) => async (dispatch) => {
    try {
      dispatch({ type: "processOrderRequest" });
  
      const { data } = await axios.get(`${server}/admin/order/${id}`, {
        withCredentials: true,
      });
  
      dispatch({ type: "processOrderSuccess",
       payload: data
     });
    } catch (error) {
      dispatch({
        type: "processOrderFail",
        payload: error.response.data.message,
      });
    }
  };


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
  