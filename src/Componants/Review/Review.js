import React from 'react';
import './Review.css'
const Review = (props) => {
    console.log(props.product);
    const{name,quantity,price,img,key}=props.product;
    
    return (
        <div className="review">
         <h4>Name   : {name}</h4>
         <img src={img} alt=""/>
        
        <p>quantity :{quantity}</p>
        <p>price    :{price*quantity}</p>
        <button class="button"
        onClick={()=>props.rd(key)}
        >Remove</button>
        
        </div>
        
    );
};

export default Review;