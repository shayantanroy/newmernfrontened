
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/layout/home/Home";
import Menu from "./components/layout/home/Menu";
import Cart from "./components/layout/cart/Cart";
import Shipping from "./components/Shipping";
import ConfrimOrder from "./components/ConfrimOrder";
import Contact from "./components/Contact";
import Myorder from "./components/Myorder";
import OrderDetails from "./components/OrderDetails";
import Myprofile from "./components/Myprofile";
import Paymentsucce from "./components/layout/Paymentsucce";
import Adminusers from "./components/Dashboard/Adminusers";
import Loader from "./components/layout/Loader";


import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearerror, loadUser, resetmessage } from "./redux/actions/Useraction";
import toast,{Toaster} from "react-hot-toast";
import {ProtectedRoute} from"protected-route-react";



import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/founder.scss"
import "./styles/menu.scss"
import "./styles/menucard.scss"
import "./styles/footer.scss"
import "./styles/cartitem.scss"
import "./styles/cart.scss"
import "./styles/shipping.scss"
import "./styles/confrimorder.scss"
import "./styles/Contact.scss"
import "./styles/myorder.scss"
import "./styles/orderdetails.scss"
import "./styles/profile.scss"
import "./styles/Adminusers.scss"
import Footer from "./components/layout/Footer";
import "./styles/paymentsuc.scss"
import "./styles/Dash.scss"
import "./styles/loder.scss"
import Dash from "./components/Dashboard/Dash";
import Adminorders from "./components/Dashboard/Adminorders";

// import Myownprofile from "./components/layout/Myownprofile";


function App() {
  const dispatch=useDispatch();
  const{error,isAuthenticated,message,loading,user}=useSelector((state)=>state.auth)
 


  useEffect(()=>{
    dispatch(loadUser());
    
    if(message){
      toast.success(message);
      dispatch(resetmessage());
    
    }
   
  },[dispatch,message,
  ]);


 
  

  return (
   <Router>
    <Header isAuthenticated={isAuthenticated}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu"  element={<Menu isAuthenticated={isAuthenticated}/>}/>
     

      <Route path="/cart"  element={<Cart/>}/>
      {isAuthenticated&&
      <Route path="/shipping" element={<Shipping/>}/>}
      {isAuthenticated&&
      <Route path="/successpay" element={<Paymentsucce/>}/>}
      {isAuthenticated&&
      <Route path="/confrimorder" element={<ConfrimOrder/>}/>}
      <Route path="/contact" element={<Contact/>}/>
      {isAuthenticated&&
      <Route path="/order" element={<Myorder/>}/>}
      {isAuthenticated&&
      <Route path="/order/:id" element={<OrderDetails/>}/>}
     
      <Route path="/myprofile" element={
      <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/"><Myprofile/></ProtectedRoute>}/>
      {/* {isAuthenticated&&
      <Route path="/myprofile" element={<Myprofile/>}/>} */}
      
   <Route path="dashboard" element={<Dash/>}/>
   
   <Route path="/admin/users" element={<Adminusers/>}/>
  
   <Route path="/admin/orders" element={<Adminorders/>}/>
    
   {/* <Route path="/ownprofile" element={<Myownprofile/>}/> */}

    

    </Routes>


    <Footer />
    <Toaster/>
   </Router>
  );
}

export default App;
