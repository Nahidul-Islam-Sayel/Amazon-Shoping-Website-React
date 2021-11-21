import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import fakeData from '../../fakeData';
import Product from '../Products/Product';

const Productkey = () => {
    const{ProductKey}= useParams()
    const product = fakeData.find(pd=>pd.key===ProductKey)
    return (
        <div>
           
            <Product addcard={false} product={product}></Product>
        </div>
    );
};

export default Productkey;