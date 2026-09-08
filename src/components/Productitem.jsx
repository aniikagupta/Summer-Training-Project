import React from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

const Productitem = ({id,image,name,price}) => {

    const currency=useContext(ShopContext)
  return (
  

    
     <Link className="text-gray-700 cursor-pointer"to={`/product/${id}`}  onClick={(e) => {
    console.log("CLICKED ID:", id)
    console.log("GOING TO:", `/product/${id}`)}}> 
        <div className="overflow-hidden">
            <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt=""/>

       </div>
       <p className="pt-3 pb-1 text-sm">{name}</p>

      <p className="pb-3 text-sm font-medium">${price.toFixed(2)}</p>
    </Link>
    
  )
}

export default Productitem
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Productitem = ({ id, image, name, price }) => {

//     console.log("ID RECEIVED:", id)

//     return (
//         <Link
//             className="text-gray-700 cursor-pointer"
//             to={`/product/${id}`}
//         >
//             <div className="overflow-hidden">
//                 <img
//                     className="hover:scale-110 transition ease-in-out"
//                     src={image[0]}
//                     alt=""
//                 />
//             </div>

//             <p className="pt-3 pb-1 text-sm">{name}</p>

//             <p className="pb-3 text-sm font-medium">
//                 ${price.toFixed(2)}
//             </p>
//         </Link>
//     )
// }

// export default Productitem