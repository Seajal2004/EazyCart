import React, {memo} from 'react';
import Product from './Product.jsx';
import productsImage from "./images/products.jpg"
function Products({items}){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{
    items.map(function (item) {
     return(
        <Product  key={item.id} image={productsImage} category={item.category} name={item.title} rate={item.rating} price={item.price} id={item.id} percentage={item.discount_percentage} />
     );
    })}
    </div>
);
}

export default memo(Products);