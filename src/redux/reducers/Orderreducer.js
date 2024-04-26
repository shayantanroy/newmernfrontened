import { createReducer } from "@reduxjs/toolkit";




export const orderReducer = createReducer(
    {},
    {
      createOrderRequest: (state) => {
        state.loading = true;
      },
      createOrderSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      },
      createOrderFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },



      paymentVerificationRequest: (state) => {
        state.loading = true;
      },
      paymentVerificationSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      },
      paymentVerificationFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      clearMessage: (state) => {
        state.message = null;
      },
      clearError: (state) => {
        state.error = null;
      },
    }
  );


  export const ordersReducer=createReducer(
    {orders:[]},
    {
      ordersreq:(state)=>{
        state.loading=true;  

      },
      orderssucc:(state,action)=>{
     state.loading=false;
      state.orders=action.payload.orders;
      },
      ordersfail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      },


      // getOrderDetailsRequest:(state)=>{
      //   state.loding=true;
      // },
      // getOrderDetailsSuccess:(state,action)=>{
      //   state.loding=false;
      //   state.orderdetail=action.payload;

      // },
      // getOrderDetailsFail:(state,action)=>{
      //   state.loding=false;
      //   state.error=action.payload;
      // },


      clearMessage: (state) => {
        state.message = null;
      },
      clearError: (state) => {
        state.error = null;
      },
    }
  )
  export const getordetails=createReducer(
    {},
    {
      getOrderDetailsRequest:(state)=>{
        state.loding=true;
      },
      getOrderDetailsSuccess:(state,action)=>{
        state.loding=false;
        state.orderdetail=action.payload;

      },
      getOrderDetailsFail:(state,action)=>{
        state.loding=false;
        state.error=action.payload;
      },
      clearMessage: (state) => {
        state.message = null;
      },
      clearError: (state) => {
        state.error = null;
      },

    }
  )