import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const item = useSelector((state) => state);
  console.log("Item" , item);
  const total = item.cart.reduce((a,b)=> a + b.price ,0)
  return (
    <div className='alert alert-success'>
      <h3 className="text-center">
        Total Items : {item.cart.length} (Total Price : {total})
      </h3>
    </div>
  )
}

export default Cart
