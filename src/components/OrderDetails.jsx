import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from 'react'
import { clearerror, getOrderDetails, myorderDetail} from '../redux/actions/Orderaction';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';


const OrderDetails = () => {
  const params = useParams();


const dispatch=useDispatch();

  const{orderdetail,loding}=useSelector((state)=>state.orderdetail);

  useEffect(() => {
    dispatch(getOrderDetails(params.id));
  }, [params.id, dispatch]);


  return (
    <section className="orderDetails">
         {loding === false ? (
    <main>
      <h1>Order Details</h1>
      <div>
        <h1>Shipping</h1>
        <p>
          <b>Address</b>
          {`${orderdetail.shippingInfo.houseNo} ${orderdetail.shippingInfo.city} ${orderdetail.shippingInfo.state} ${orderdetail.shippingInfo.country} ${orderdetail.shippingInfo.pinCode}`}

        </p>
      </div>
      <div>
        <h1>Contact</h1>
        <p>
          <b>Name</b>
          {orderdetail.user.name}
        </p>
        <p>
          <b>Phone</b>
          {orderdetail.shippingInfo.phoneNo}
        </p>
      </div>

      <div>
        <h1>Status</h1>
        <p>
          <b>Order Status</b>
          {orderdetail.orderStatus}
        </p>
        <p>
          <b>Placed At</b>
          {orderdetail.createdAt.split("T")[0]}
        </p>
        <p>
          <b>Delivered At</b>
          {orderdetail.deliveredAt?orderdetail.deliveredAt.split("T")[0] :"Need Some Time"}
        </p>
      </div>

      <div>
        <h1>Payment</h1>
        <p>
          <b>Payment Method</b>
          {orderdetail.paymentMethod}
        </p>
        <p>
          <b>Payment Reference</b>
           {orderdetail.paymentMethod==="Online" ?orderdetail.paymentInfo 
          :
          "NA"} 
        </p>
        <p>
          <b>Paid At</b>
          {orderdetail.paymentMethod === "Online"
                ? orderdetail.paidAt.split("T")[0]
                : "payment in cash"}   
                     </p>
      </div>

      <div>
        <h1>Amount</h1>
        <p>
          <b>Items Total</b>₹{orderdetail.itemsPrice}
        </p>
        <p>
          <b>Shipping Charges</b>₹{orderdetail.shippingCharges}
        </p>
         <p>
          <b>Tax</b>₹{232}
        </p> 
        <p>
          <b>Total Amount</b>₹{orderdetail.totalAmount}
        </p>
      </div>

      <article>
        <h1>Ordered Items</h1>
        <div>
          <h4>Vegcheesepizaa</h4>
          <div>
            <span>{orderdetail.orderItems.vegcheesepizaa.quantity}</span> x <span>{orderdetail.orderItems.vegcheesepizaa.price}</span>
          </div>
        </div>
        <div>
          <h4>PannerPizza</h4>
          <div>
            <span>{orderdetail.orderItems.pannerPizza.quantity}</span> x <span> {orderdetail.orderItems.pannerPizza.price} </span>
          </div>
        </div>
        <div>
          <h4>Burger Fries</h4>
          <div>
            <span>{orderdetail.orderItems.chickencheesepizza.quantity}</span> x <span>{orderdetail.orderItems.chickencheesepizza.price}</span>
          </div>
        </div>

        <div>
          <h4
            style={{
              fontWeight: 800,
            }}
          >
            Sub Total
          </h4>
          <div
            style={{
              fontWeight: 800,
            }}
          >
            ₹{orderdetail.totalAmount}
          </div>
        </div>
      </article>
    </main>
          ):(
        ""
       ) }   
  </section>
  )
}

export default OrderDetails
