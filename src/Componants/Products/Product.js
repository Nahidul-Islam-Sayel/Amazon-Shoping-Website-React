import React from 'react';
import './Product.css'
import {BiCartAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Product = (props) => {
   const{name,img,seller,price,stock,key}=props.product;

    return (
     <div class="product">
         <div class="img">
             <img src={img} alt=""/>
         </div>
         <div>
             <Link to={"/Product/"+key}> <h1 class="name">{name}</h1></Link>
    <p>By : {seller}</p>
<p>${price}</p>
<p> only {stock} left in-stock order soon</p>
{
    props.addcard==true&&
    <button class="button"

onClick={()=>props.hd(props.product)}
> <BiCartAlt/> Add to cart</button>}
         </div>
     </div>
    );
};

export default Product;