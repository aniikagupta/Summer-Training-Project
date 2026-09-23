// import React, { useContext, useEffect,useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title'
// import bin from '../assets/binlogo.png'
// import CartTotal from '../components/CartTotal'
// const Cart = () => {
//   const {products,cartItems,currency,updatequantity,navigate}=useContext(ShopContext)
//   const [cartdata,setcartdata]=useState([])
//   useEffect(()=>{
//       const tempdata=[]
//       for(const items in cartItems){
//         for(const item in cartItems[items]){
//           if(cartItems[items][item]>0){
//             tempdata.push({
//               _id:items,
//               size:item,
//               quantity:cartItems[items][item]
//             })
//           }
//         }
//       }
//       setcartdata(tempdata)
//   },[cartItems])
//   return (
//     <div className='border-t pt-14'>
//       <div className='text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'}/>
//       </div>
//       <div>
//         {
//           cartdata.map((item,index)=>{
//             const productdata=products.find((product)=>product._id===item._id);
//             return(
//              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
//               <div className='flex items-start gap-6'>
//                 <img className='w-16 sm:w-20' src={productdata.image[0]}/>
//                 <div>
//                   <p className='text-xs sm:text-lg font-medium'>{productdata.name}</p>
//                   <div className='flex items-center gap-5 mt-2'>
//                     <p>{currency}{productdata.price}</p>
//                     <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
//                   </div>
//                 </div>
//               </div>
//               <input onChange={(e)=>e.target.value===''||e.target.value==='0'?null:updatequantity(item._id,item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity}/>
//               <img onClick={()=>updatequantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={bin}/>
//              </div>
//             )
//           })
//         }
//       </div>
//       <div className='flex justify-end my-20'>
//         <div className='w-full sm:w-[450px]'>
//           <CartTotal/>
//           <div className='w-full text-end'>
//             <button onClick={() => navigate('/placeorder')} className='bg-black text-white text-sm my-8 py-3 px-8 hover:bg-gray-800'>CHECKOUT</button>
//           </div>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default Cart

import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import bin from '../assets/binlogo.png'
import CartTotal from '../components/CartTotal'

const Cart = () => {
  const { products, cartItems, currency, updatequantity, navigate } = useContext(ShopContext)

  // Turn the cartItems object into a simple list.
  // It's calculated on every render, so no state or useEffect is needed.
  const cartdata = []
  for (const id in cartItems) {
    for (const size in cartItems[id]) {
      if (cartItems[id][size] > 0) {
        cartdata.push({
          _id: id,
          size: size,
          quantity: cartItems[id][size]
        })
      }
    }
  }

  const handleQuantityChange = (e, id, size) => {
    const value = Number(e.target.value)
    // ignore empty or 0 while the user is typing
    if (value < 1) {
      return
    }
    updatequantity(id, size, value)
  }

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {/* Empty state */}
      {cartdata.length === 0 ? (
        <div className='text-center py-20'>
          <p className='text-xl text-gray-700 mb-2'>Your cart is empty</p>
          <p className='text-sm text-gray-500 mb-6'>Browse the collection and add something you like.</p>
          <button
            onClick={() => navigate('/collection')}
            className='bg-black text-white text-sm py-3 px-8 hover:bg-gray-800 transition'
          >
            CONTINUE SHOPPING
          </button>
        </div>
      ) : (
        <>
          <div>
            {
              cartdata.map((item) => {
                const productdata = products.find((product) => product._id === item._id);
                // skip items whose product no longer exists
                if (!productdata) {
                  return null
                }
                return (
                  // key uses id + size so each row is unique (index keys caused wrong quantities after deleting)
                  <div key={item._id + item.size} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                    <div className='flex items-start gap-6'>
                      <img className='w-16 sm:w-20' src={productdata.image[0]} alt={productdata.name} />
                      <div>
                        <p className='text-xs sm:text-lg font-medium'>{productdata.name}</p>
                        <div className='flex items-center gap-5 mt-2'>
                          <p>{currency}{productdata.price.toFixed(2)}</p>
                          <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                        </div>
                      </div>
                    </div>
                    <input
                      onChange={(e) => handleQuantityChange(e, item._id, item.size)}
                      className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                    />
                    <img
                      onClick={() => updatequantity(item._id, item.size, 0)}
                      className='w-4 mr-4 sm:w-5 cursor-pointer hover:opacity-60'
                      src={bin}
                      alt="Remove item"
                    />
                  </div>
                )
              })
            }
          </div>

          <div className='flex justify-end my-20'>
            <div className='w-full sm:w-[450px]'>
              <CartTotal />
              <div className='w-full text-end'>
                <button
                  onClick={() => navigate('/placeorder')}
                  className='bg-black text-white text-sm my-8 py-3 px-8 hover:bg-gray-800 transition'
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart



