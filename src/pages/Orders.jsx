

// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title'

// const Orders = () => {
//   const { products, currency } = useContext(ShopContext)

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>
//       <div>
//         {/* sample orders for now (no backend yet) */}
//         {
//           products.slice(1, 4).map((item, index) => (
//             <div key={index} className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-b py-4 text-gray-700'>
//               <div className='flex items-start gap-6 text-sm'>
//                 <img src={item.image[0]} alt={item.name} className='w-16 sm:w-20' />
//                 <div>
//                   <p className='sm:text-base font-medium'>{item.name}</p>
//                   <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
//                     <p className='text-lg'>{currency}{item.price.toFixed(2)}</p>
//                     <p className='text-gray-500'>Qty: 1</p>
//                     <p>Size: M</p>
//                   </div>
//                   <p className='mt-2'>Date: <span className='text-gray-400'>{new Date().toLocaleDateString()}</span></p>
//                 </div>
//               </div>
//               <div className='md:w-1/2 flex justify-between'>
//                 <div className='flex items-center gap-2'>
//                   <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                   <p className='text-sm md:text-base'>Ready To Ship</p>
//                 </div>
//                 <button className='border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-100 transition'>Track Order</button>
//               </div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Orders
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import Loading from '../components/Loading'

const API_URL = 'http://localhost:4000/api'

const Orders = () => {
  const { currency } = useContext(ShopContext)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  // There's no login system yet, so this just shows every order stored
  // by the backend, most recent first. With real auth, this request
  // would filter by the logged-in user's id instead.
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`${API_URL}/orders`)
        if (!res.ok) throw new Error('Request failed')
        const data = await res.json()
        setOrders(data)
      } catch (error) {
        console.error("Failed to load orders:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchOrders()
  }, [])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {loading ? (
        <Loading />
      ) : orders.length === 0 ? (
        <div className='text-center py-20'>
          <p className='text-xl text-gray-700 mb-2'>No orders yet</p>
          <p className='text-sm text-gray-500'>Orders you place will show up here.</p>
        </div>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order.id} className='border-t border-b py-4 text-gray-700'>
              {order.items.map((item, i) => (
                <div key={i} className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-2'>
                  <div className='text-sm'>
                    <p className='sm:text-base font-medium'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-1 text-gray-600'>
                      <p>{currency}{item.price.toFixed(2)}</p>
                      <p className='text-gray-500'>Qty: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                  </div>
                  {i === 0 && (
                    <div className='md:w-1/3 flex justify-between'>
                      <div className='flex items-center gap-2'>
                        <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                        <p className='text-sm md:text-base'>{order.status}</p>
                      </div>
                      <button className='border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-100 transition'>Track Order</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders