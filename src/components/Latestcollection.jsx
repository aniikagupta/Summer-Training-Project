// import React from 'react'
// import {useContext} from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title'
// import { products } from '../assets/assets.js'
// import {useState} from 'react'
// import {useEffect} from 'react'
// import Productitem from './Productitem'

// const Latestcollection = () => {
//     const { products } = useContext(ShopContext)
//     const [latestProducts, setLatestProducts] = useState([])
//     useEffect(() => {
//         setLatestProducts(products.slice(0, 4))

//     },[])

   
//   return (
//     <div className="my-10">
//         <div className="text-center py-8 text-3xl">
//         <Title text1={"Latest"} text2={"Collection"}/>
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
//         Discover our latest arrivals and exclusive pieces.
//         </p>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//             {latestProducts.map((item,index) => (
//                 <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
//             ))}
//         </div>
    

//     </div>
//   )
// }

// export default Latestcollection
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Productitem from './Productitem'
import Loading from './Loading'

const Latestcollection = () => {
  const { products, loading } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 4))
  }, [products])

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"Collection"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our latest arrivals and exclusive pieces.
        </p>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-6">
          {latestProducts.map((item) => (
            <Productitem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Latestcollection