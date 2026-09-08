import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import paymentMethodImage from '../assets/upilogo.png'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'

const Placeorder = () => {
  const [method,setmethod]=React.useState('cod');
  const {navigate}=useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>

        </div>
        <div className='flex gap-3'>
          <input placeholder='First  Name' className='border border-gray-300 rounded px-3.5 py-1.5 w-full  '/>
          <input placeholder='Last Name' className='border border-gray-300 rounded px-3.5 py-1.5 w-full  '/>
        </div>
        <input placeholder='Email Address' type='email' className='border border-gray-300 rounded px-3.5 py-1.5 w-full  '/>
         <input placeholder='Street' type='text' className='border border-gray-300 rounded px-3.5 py-1.5 w-full  '/>
         <div className='flex gap-3'>
          <input placeholder='City' className='border border-gray-300 rounded px-3.5 py-1.5 w-full  '/>
          <input placeholder='State' className='border border-gray-300 rounded px-3.5 py-1.5 w-full  '/>
        </div>
        <div className='flex gap-3'>
          <input placeholder='PinCode' type='number' className='border border-gray-300 rounded px-3.5 py-1.5 w-full  '/>
          <input placeholder='Country' type='text' className='border border-gray-300 rounded px-3.5 py-1.5 w-full  '/>
        </div>
        <input placeholder='Phone Number' type='number' className='border border-gray-300 rounded px-3.5 py-1.5 w-full  '/>
      </div>
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setmethod('COD')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border-rounded-full ${method === 'COD' ? 'bg-green-300' : 'bg-gray-300'}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
             <div onClick={()=>setmethod('UPI')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border-rounded-full ${method === 'UPI' ? 'bg-green-300' : 'bg-gray-300'}`}></p>
              <img src={paymentMethodImage} alt="Payment Method" />
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm  hover:bg-gray-600 transition'>PLACE ORDER</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Placeorder