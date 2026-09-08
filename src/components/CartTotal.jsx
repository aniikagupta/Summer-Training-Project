import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
const CartTotal = () => {
    const {currency,delivery_fee,getcartamt}=useContext(ShopContext)
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTAL'}/>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{getcartamt().toFixed(2)}</p>
          
          </div>
          <hr/>
          <div className='flex justify-between'>
            <p>Delivery Fee</p>
            <p>{currency}{delivery_fee.toFixed(2)}</p>
           
        </div>
         <hr/>
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency}{getcartamt()===0?0:(getcartamt() + delivery_fee).toFixed(2)}</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal