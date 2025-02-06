'use client'
import React, { useState } from 'react'

const AddToCartButton = ({ onClick }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    setIsAnimating(true)
    onClick()
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <button 
      className={`bg-yellow-600 text-white px-4 py-2 text-sm rounded shadow-md transition-all duration-300 
                  hover:bg-green-600 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden 
                  ${isAnimating ? 'scale-95' : 'scale-100'}`}
      onClick={handleClick}
    >
      Add to Cart
    </button>
  )
}

export default AddToCartButton
