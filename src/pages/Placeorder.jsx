
// import React, { useState, useContext } from 'react'
// import { toast } from 'react-toastify'
// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import paymentMethodImage from '../assets/upilogo.png'
// import { ShopContext } from '../context/ShopContext'

// // same style for every input, so it is written once
// const inputStyle = 'border border-gray-300 rounded px-3.5 py-1.5 w-full focus:outline-none focus:border-gray-600'

// const Placeorder = () => {
//   const [method, setmethod] = useState('COD');
//   const [placing, setPlacing] = useState(false);
//   const { navigate, getCartCount, clearCart } = useContext(ShopContext)

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (getCartCount() === 0) {
//       toast.error('Your cart is empty')
//       return
//     }

//     // There is no server yet, so we wait 1 second to pretend the order is being sent
//     setPlacing(true)
//     setTimeout(() => {
//       clearCart()
//       toast.success('Order placed successfully')
//       navigate('/orders')
//     }, 1000)
//   }

//   return (
//     <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

//       {/* Left side - delivery form */}
//       <div className='flex flex-col gap-4 w-full max-w-[480px]'>
//         <div className='text-xl sm:text-2xl my-3'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>
//         <div className='flex gap-3'>
//           <input required placeholder='First Name' className={inputStyle} />
//           <input required placeholder='Last Name' className={inputStyle} />
//         </div>
//         <input required placeholder='Email Address' type='email' className={inputStyle} />
//         <input required placeholder='Street' type='text' className={inputStyle} />
//         <div className='flex gap-3'>
//           <input required placeholder='City' className={inputStyle} />
//           <input required placeholder='State' className={inputStyle} />
//         </div>
//         <div className='flex gap-3'>
//           <input required placeholder='PinCode' type='text' className={inputStyle} />
//           <input required placeholder='Country' type='text' className={inputStyle} />
//         </div>
//         <input required placeholder='Phone Number' type='tel' className={inputStyle} />
//       </div>

//       {/* Right side - total and payment */}
//       <div className='mt-8'>
//         <div className='sm:min-w-80'>
//           <CartTotal />
//         </div>

//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           <div className='flex gap-3 flex-col lg:flex-row'>
//             <div onClick={() => setmethod('COD')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer hover:bg-gray-50'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'COD' ? 'bg-green-400' : 'bg-gray-200'}`}></p>
//               <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//             </div>
//             <div onClick={() => setmethod('UPI')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer hover:bg-gray-50'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'UPI' ? 'bg-green-400' : 'bg-gray-200'}`}></p>
//               <img className='h-5 mx-4' src={paymentMethodImage} alt="UPI" />
//             </div>
//           </div>

//           <div className='w-full text-end mt-8'>
//             <button
//               type='submit'
//               disabled={placing}
//               className='bg-black text-white px-16 py-3 text-sm hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed'
//             >
//               {placing ? 'PLACING ORDER...' : 'PLACE ORDER'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default Placeorder
import React, { useState, useContext } from 'react'
import { toast } from 'react-toastify'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import paymentMethodImage from '../assets/upilogo.png'
import { ShopContext } from '../context/ShopContext'

const API_URL = 'http://localhost:4000/api'
const inputStyle = 'border border-gray-300 rounded px-3.5 py-1.5 w-full focus:outline-none focus:border-gray-600'

const emptyForm = {
  firstName: '', lastName: '', email: '', street: '',
  city: '', state: '', pincode: '', country: '', phone: ''
}

const Placeorder = () => {
  const [method, setmethod] = useState('COD');
  const [placing, setPlacing] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const { navigate, getCartCount, cartItems, products, getcartamt, delivery_fee, clearCart } = useContext(ShopContext)

  // one handler for every input - the input's "name" attribute decides
  // which field in formData gets updated
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (getCartCount() === 0) {
      toast.error('Your cart is empty')
      return
    }

    // turn the cart object into a plain list of items to store on the order
    const orderItems = []
    for (const id in cartItems) {
      const product = products.find(p => p._id === id)
      for (const size in cartItems[id]) {
        if (cartItems[id][size] > 0) {
          orderItems.push({
            productId: id,
            name: product ? product.name : 'Unknown product',
            price: product ? product.price : 0,
            size,
            quantity: cartItems[id][size]
          })
        }
      }
    }

    setPlacing(true)
    try {
      const res = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: orderItems,
          amount: getcartamt() + delivery_fee,
          address: formData,
          paymentMethod: method
        })
      })
      if (!res.ok) throw new Error('Request failed')

      clearCart()
      toast.success('Order placed successfully')
      navigate('/orders')
    } catch (error) {
      console.error("Failed to place order:", error)
      toast.error('Could not place order. Is the backend server running?')
    } finally {
      setPlacing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* Left side - delivery form */}
      <div className='flex flex-col gap-4 w-full max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input required name='firstName' value={formData.firstName} onChange={handleChange} placeholder='First Name' className={inputStyle} />
          <input required name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Last Name' className={inputStyle} />
        </div>
        <input required name='email' type='email' value={formData.email} onChange={handleChange} placeholder='Email Address' className={inputStyle} />
        <input required name='street' type='text' value={formData.street} onChange={handleChange} placeholder='Street' className={inputStyle} />
        <div className='flex gap-3'>
          <input required name='city' value={formData.city} onChange={handleChange} placeholder='City' className={inputStyle} />
          <input required name='state' value={formData.state} onChange={handleChange} placeholder='State' className={inputStyle} />
        </div>
        <div className='flex gap-3'>
          <input required name='pincode' type='text' value={formData.pincode} onChange={handleChange} placeholder='PinCode' className={inputStyle} />
          <input required name='country' type='text' value={formData.country} onChange={handleChange} placeholder='Country' className={inputStyle} />
        </div>
        <input required name='phone' type='tel' value={formData.phone} onChange={handleChange} placeholder='Phone Number' className={inputStyle} />
      </div>

      {/* Right side - total and payment */}
      <div className='mt-8'>
        <div className='sm:min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setmethod('COD')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer hover:bg-gray-50'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'COD' ? 'bg-green-400' : 'bg-gray-200'}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
            <div onClick={() => setmethod('UPI')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer hover:bg-gray-50'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'UPI' ? 'bg-green-400' : 'bg-gray-200'}`}></p>
              <img className='h-5 mx-4' src={paymentMethodImage} alt="UPI" />
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button
              type='submit'
              disabled={placing}
              className='bg-black text-white px-16 py-3 text-sm hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed'
            >
              {placing ? 'PLACING ORDER...' : 'PLACE ORDER'}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Placeorder