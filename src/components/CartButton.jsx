
import React,{useState} from "react";

// keep the add to cart component here
const CartButton = () => {
  const [count,setCount]=useState(0)
  const handleClick=(value)=>{
    setCount(count+value)
  }
    //manage state of the count 
  return(<>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
    {count> 0 ? (
      <>
      <button onClick={()=>handleClick(-1)}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={()=>handleClick(+1)}>+</button>
      </>
    ) : (
      <p onClick={()=>setCount((prevCount)=>prevCount+1)}>
      Add To Cart
      </p>
    )}
  </div>
   </>
  );
};
export default CartButton;
