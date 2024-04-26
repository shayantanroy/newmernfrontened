import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./reducers/Userreducer";
import { adminReducer } from "./reducers/Adminreducer";
import { cartreducer } from "./reducers/Cartreducer";
import { getordetails, orderReducer, ordersReducer } from "./reducers/Orderreducer";
const store = configureStore({
    reducer: {
     auth: authReducer,
     admin:adminReducer,
     cart:cartreducer,
     order:orderReducer,
     orders:ordersReducer,
     orderdetail:getordetails,

    },
  });
  
  export default store;
  
export const server="https://b-tech-pizzawala.onrender.com/api/v1";