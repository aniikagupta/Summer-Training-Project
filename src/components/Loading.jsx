import React from 'react'

// simple spinner, used while products are "loading"
const Loading = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading