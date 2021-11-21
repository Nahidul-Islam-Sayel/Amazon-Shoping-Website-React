import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
import pic from '../../images/giphy.gif'
import './Order.css'
const Order = () => {
  const[cart, setCart]= useState([]);
  const[order,setOrder]= useState(false);
  const handle =(product)=>{
      const set= cart.filter(pd=>pd.key!==product)
      setCart(set);
      removeFromDatabaseCart(product);
  }

  const holder = ()=>{
      processOrder();
      setCart([]);
      setOrder(true);
  }
  let thankyou;
  if(order){
      thankyou=<img src={pic} alt=""/>
  }
  
  useEffect(()=>{
      const savecart = getDatabaseCart();
      const productkeys = Object.keys(savecart);
      const cartProduct = productkeys.map(key=>{
          const product = fakeData.find(pd=>pd.key===key);
          product.quantity = savecart[key];
          return product;

      });
      setCart(cartProduct);


  },[])
  return (
      
        <div class="twin-container">
           
           <div class="">
           {
                cart.map(pd=><Review product={pd}
                rd={handle}
                ></Review>)
            }
       {
           thankyou
       }
           
           </div>
           <div class="cart">
                <Cart cd={cart}>

                </Cart>
            <Link to="/order"><button class="button" onClick={holder}>Confram</button></Link>

           </div>
        </div>
    );
};

export default Order;