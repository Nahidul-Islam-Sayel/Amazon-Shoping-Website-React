import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cd;
    let total=0;
    for(let i=0; i<cart.length; i++){
        const product=cart[i];
        
       cart[i].price*=cart[i].quantity;
        total+=(cart[i].price);
   console.log(product);
    }
   let text=(total/10).toFixed(2);
   

 
    return (
        <div>
           <h2>Order Summary</h2> 
           <h4>item ordered: {cart.length}</h4>
           
           <p>Tax :{text}</p>
           <p>price:{(total.toFixed(2))}</p>
           <h5>Total: {(total+parseFloat(text)).toFixed(2)}</h5>
           
        </div>
    );
};

export default Cart;