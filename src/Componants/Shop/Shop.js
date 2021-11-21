import React, { useState , useEffect} from 'react';
import { BiCard } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';

import './Shop.css'
const Shop = () => {
    const[cart,setcart]= useState([]);
    
    const handler = (product) =>{
        const newCart=[...cart,product];
        setcart(newCart);
        const sameproduct = newCart.filter(pd=>pd.key===product.key)
        const count = sameproduct.length;
        // console.log(count);
        addToDatabaseCart(product.key,count);
        
        product.quantity=count;
       
    }
   
    useEffect(()=>{
        const savecart = getDatabaseCart();
        const productkeys = Object.keys(savecart);
        const cartProduct = productkeys.map(key=>{
            const product = fakeData.find(pd=>pd.key===key);
            product.quantity = savecart[key];
            return product;
  
        });
        setcart(cartProduct);
  
  
    },[])
    const first10 = fakeData.slice(0,15);
    const[product,setProduct]= useState(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
                 <ul>
                    {
                        product.map(data=><Product
                        product={data}
                        addcard={true} 
                        hd={handler}
                        ></Product>)
                    }
                 </ul>
            </div>
            <div className="cart-container">
                <Cart cd={cart}>
                
                </Cart>
                <Link to="/order"><button class="button">Order Now</button></Link>
                
                
             </div>    
        </div>
    );
};

export default Shop;