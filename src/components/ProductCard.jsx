"use client";
import React, { useState } from "react";
import ColorSelector from "./ColorSelector";
import FavoriteIcon from "./FavoriteIcon";

const ProductCard = ({
  productName = "Unknown Product",
  productColor,
  discount,
  regularPrice,
  salePrice,
  imageUrl,
}) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
        <img src={imageUrl} alt={productName} className="w-full h-full object-contain rounded-lg" />
        <div className="absolute top-2 right-2 text-xs text-gray-700 uppercase tracking-wider">
          {productColor}
        </div>
        <div className="absolute bottom-4 right-4">
          <FavoriteIcon />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {discount && <p className="text-xs bg-red-600 text-white px-2 py-1 w-fit tracking-wide">UP TO -{discount}%</p>}
        <h3 className="text-lg text-gray-800 font-light mt-1">{productName}</h3>
        <ColorSelector />

        {/* Price Details */}
        <div className="text-sm mt-2">
          <span className="text-lg font-light">${regularPrice}</span>
          {discount && <span className="text-gray-500 text-lg line-through ml-2">${salePrice}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
