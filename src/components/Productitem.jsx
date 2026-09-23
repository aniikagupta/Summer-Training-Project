
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Productitem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link
      to={`/product/${id}`}
      className="block text-gray-700 hover:text-black cursor-pointer"
    >
      {/* Fixed-size image container */}
      <div className="overflow-hidden aspect-[3/4] bg-gray-100">
        <img
          className="w-full h-full object-cover object-center hover:scale-110 transition ease-in-out duration-300"
          src={image[0]}
          alt={name}
        />
      </div>

      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="pb-3 text-sm font-medium">
        {currency}{price.toFixed(2)}
      </p>
    </Link>
  )
}

export default Productitem