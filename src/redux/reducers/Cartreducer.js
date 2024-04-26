import { createReducer } from "@reduxjs/toolkit";

const initialState={
    cartItems:localStorage.getItem("cartItems")
    ?
    JSON.parse(localStorage.getItem("cartItems"))
    : {
        pannerPizza:{
            quantity:0,
            price:199,

        },
        vegcheesepizaa:{
            quantity:0,
            price:129,

        },
        chickencheesepizza:{
            quantity:0,
            price:299,
        }
    },
    subTotal:localStorage.getItem("cartPrices")?
    JSON.parse(localStorage.getItem("cartPrices")).subTotal
    :0,

    shippingCharges:localStorage.getItem("cartPrices")?
    JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    :0,

    total:localStorage.getItem("cartPrices")?
    JSON.parse(localStorage.getItem("cartPrices")).total
    :0,



    // for shipping information

    shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
}





export const cartreducer=createReducer(initialState,
    {
        pannerPizzaIncrement:(state)=>{
        state.cartItems.pannerPizza.quantity+=1;
    },
    vegcheesepizaaIncrement:(state)=>{
        state.cartItems.vegcheesepizaa.quantity+=1;
    },
    chickencheesepizzaIncrement:(state)=>{
        state.cartItems.chickencheesepizza.quantity+=1;
    },
    chickencheesepizzaDecrement:(state)=>{
        state.cartItems.chickencheesepizza.quantity-=1;
    },
    pannerPizzaDecrement:(state)=>{
        state.cartItems.pannerPizza.quantity-=1;
    },
    vegcheesepizaaDecrement:(state)=>{
        state.cartItems.vegcheesepizaa.quantity-=1;
    },

    calculatePrice:(state)=>{
        state.subTotal=
        state.cartItems.pannerPizza.price *
        state.cartItems.pannerPizza.quantity +
        state.cartItems.chickencheesepizza.price *
        state.cartItems.chickencheesepizza.quantity +
        state.cartItems.vegcheesepizaa.price *
        state.cartItems.vegcheesepizaa.quantity;
        state.shippingCharges=state.subTotal>0?20:0;
        state.total=state.subTotal+state.shippingCharges;
    },
    



    emptyState:(state) => {
        state.cartItems = {
            pannerPizza:{
                quantity:0,
                price:199,
    
            },
            vegcheesepizaa:{
                quantity:0,
                price:129,
    
            },
            chickencheesepizza:{
                quantity:0,
                price:299,
            }
        };
    
        state.subTotal = 0;
        state.shippingCharges = 0;
        
        state.total = 0;
      },

      addShippingInfo: (state, action) => {
        state.shippingInfo = {
          houseNo: action.payload.houseNo,
          city: action.payload.city,
          state: action.payload.state,
          country: action.payload.country,
          pinCode: action.payload.pinCode,
          phoneNo: action.payload.phoneNo,
        };
    },
}
  )