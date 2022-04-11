// reusable card component
import CartButton from "./CartButton";
import {useState} from 'react';
const GroceryItem = ({title,imgURL,mrp,sellingPrice,discount}) => {
  return <> <div>
  <img src={imgURL} alt="" />
  <p>{title}</p>
  
  <h4>{sellingPrice}</h4>
  <strike>MRP-{mrp}</strike>
     
  
  
  <p>{discount}</p>
  <CartButton/>
</div>
</>;
};
export default GroceryItem;
