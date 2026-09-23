// import React from 'react'

// const Policy = () => {
//   return (
//     <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">Policy</div>
//   )
// }

// export default Policy
import React from 'react'

const Policy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-8 sm:gap-2 text-center py-16 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <p className="font-semibold">Easy Exchange</p>
        <p className="text-gray-400">We offer a hassle free exchange policy</p>
      </div>
      <div>
        <p className="font-semibold">7 Days Return</p>
        <p className="text-gray-400">We provide 7 days free return on all orders</p>
      </div>
      <div>
        <p className="font-semibold">Customer Support</p>
        <p className="text-gray-400">We are available Monday to Saturday, 10 AM to 6 PM</p>
      </div>
    </div>
  )
}

export default Policy