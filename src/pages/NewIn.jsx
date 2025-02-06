import React from "react"
import ProductCard from "../components/ProductCard"

export default function NewIn() {
  const product = {
    productName: "Classic Lumine Ring",
    discount: 30,
    regularPrice: 49,
    salePrice: 40,
    imageUrl: "https://via.placeholder.com/280x200", // Replace with actual image URL
  };

  return (
    <div id="newin">
      <h1 className="text-4xl font-light text-center my-4">
        NEW IN
      </h1>

      <div className="flex justify-between mb-8 text-black">
        <div className="flex items-center text-sm font-sans gap-2">
          <svg
            role="presentation"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 64 64"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          >
            <line x1="50.69" y1="32" x2="56.32" y2="32"></line>
            <line x1="7.68" y1="32" x2="38.69" y2="32"></line>
            <line x1="26.54" y1="15.97" x2="56.32" y2="15.97"></line>
            <line x1="7.68" y1="15.97" x2="14.56" y2="15.97"></line>
            <line x1="35" y1="48.03" x2="56.32" y2="48.03"></line>
            <line x1="7.68" y1="48.03" x2="23" y2="48.03"></line>
            <circle cx="20.55" cy="15.66" r="6"></circle>
            <circle cx="44.69" cy="32" r="6"></circle>
            <circle cx="29" cy="48.03" r="6"></circle>
          </svg>
          FILTER
        </div>

        <div className="flex items-center text-sm font-sans gap-2">
          DEFAULT
          <img src="/images/m.svg" alt="" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center my-8">
        <ProductCard
          productName="Pearly Snow Necklace"
          regularPrice="120"
          productColor="Silver"
          imageUrl="/images/p11co.jpg"
        />
        <ProductCard
          productName="Crystal Wing Necklace"
          regularPrice="90"
          productColor="gold"
          imageUrl="/images/p12.jpg"
        />
        <ProductCard
          productName="Lucky Snowman Necklace"
          productColor="gold"
          regularPrice="120"
          imageUrl="/images/p13.jpg"
        />
        <ProductCard
          productName="Luck Lock Necklace (White)"
          regularPrice="120"
          productColor="Silver"
          imageUrl="/images/p14.jpg"
        />
        <ProductCard
          productName="Love Song Necklace"
          discount="25"
          regularPrice="60"
          productColor="gold"
          salePrice="80"
          imageUrl="/images/p15-2.jpg"
        />
        <ProductCard
          productName="Pearly Snow Earring"
          discount="25"
          regularPrice="45"
          productColor="gold"
          salePrice="60"
          imageUrl="/images/p16.jpg"
        />
        <ProductCard
          productName="Crystal Wing Earrings"
          discount="24"
          productColor="gold"
          regularPrice="75"
          salePrice="99"
          imageUrl="/images/p17.jpg"
        />
        <ProductCard
          productName="Horseshoe Bracelet (White)"
          discount="50"
          productColor="Silver"
          regularPrice="40"
          salePrice="79"
          imageUrl="/images/p18.jpg"
        />
        <ProductCard
          productName="Lucky Snowman Earrings (Pair)"
          discount="50"
          regularPrice="55"
          productColor="gold"
          salePrice="110"
          imageUrl="/images/p19.jpg"
        />
        <ProductCard
          productName="Lucky Snowman"
          discount="25"
          regularPrice="90"
          productColor="gold"
          salePrice="120"
          imageUrl="/images/p20.jpg"
        />
      </div>
    </div>
  );
}
