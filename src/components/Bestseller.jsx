// import React from 'react'
// import {useContext} from 'react'
// import {ShopContext} from '../context/ShopContext'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import Title from './Title'
// import Product from '../pages/Product'
// import Productitem from './Productitem'
// const Bestseller = () => {
//   const {products} = useContext(ShopContext)
//   const[bestseller,setBestseller]=React.useState([])
//   useEffect(()=>{
//     const bestsellers = products.filter((product) => product.bestseller === true);
//     setBestseller(bestsellers.slice(0, 4));
//   },[])

//   return (
//     <div className="my-10">
//         <div className="text-center text-3xl py-8">
//             <Title text1={"Best"} text2={"Sellers"}/>
//             <p className="w-3/4 m-auto text-xs sm:text-base text-gray-600">
//                 Discover our most popular products that customers love!
//             </p>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//             {
//             bestseller.map((item,index)=>(
//              <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
// ))
//             }

//         </div>
//     </div>
//   )
// }

// export default Bestseller
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Productitem from './Productitem'
import Loading from './Loading'

const Bestseller = () => {
  const { products, loading } = useContext(ShopContext)
  const [bestseller, setBestseller] = useState([])

  useEffect(() => {
    const bestsellers = products.filter((product) => product.bestseller === true);
    setBestseller(bestsellers.slice(0, 4));
  }, [products])

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our most popular products that customers love!
        </p>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-6">
          {bestseller.map((item) => (
            <Productitem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Bestseller