import ProductCard from "../components/ProductCard";

export default function Home(){
  const product = {
    productName: "Classic Lumine Ring",
    discount: 30,
    regularPrice: 49,
    salePrice: 40,
    imageUrl: "https://via.placeholder.com/280x200",
  };
  return (
    <main className="w-full">
      <div className="flex flex-row h-auto w-full">
        <div className="w-full md:w-1/2">
          <img src="/images/jewe.jpg" alt="" className="w-full h-auto object-cover" />
        </div>
        <div className="bg-gray-100 flex flex-col justify-center items-center gap-6 w-full md:w-1/2 p-5">
          <div className="text-4xl font-serif">Jewelry</div>
          <div className="text-lg text-gray-600 tracking-wide">SIMPLICITY REDEFINED</div>
        </div>
      </div>

      <div className="flex justify-center gap-4 flex-wrap pt-12">
        {['NECKLACE', 'EARINGS', 'BRACELET', 'RINGS'].map((category) => (
          <div key={category} className="border border-gray-500 h-9 w-auto flex justify-center items-center rounded-md">
            <div className="text-sm text-gray-600 p-2">{category}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center my-8 px-10">
        <div className="flex items-center space-x-2 text-sm font-light text-gray-600">
          <svg role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 64 64" stroke="currentColor" strokeWidth="3" fill="none">
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
          <span>FILTER</span>
        </div>
        <div className="text-sm text-gray-600">
          <span>DEFAULT</span>
          <img src="/images/m.svg" alt="" className="inline-block ml-2" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <ProductCard
          productName="Classic Bracelet"
          productColor="gold"
          regularPrice="120"
          imageUrl="/images/p1.jpg"
        />
        <ProductCard
          productName={product.productName}
          discount={product.discount}
          productColor="Silver"
          regularPrice={product.regularPrice}
          salePrice={product.salePrice}
          imageUrl="/images/p2.jpg"
        />
        <ProductCard
          productName="Pavé Crystal Ring Gold"
          discount={product.discount}
          productColor="Silver"
          regularPrice={product.regularPrice}
          salePrice={product.salePrice}
          imageUrl="/images/p3.jpg"
        />
        <ProductCard
          productName={product.productName}
          discount={product.discount}
          productColor="rose gold"
          regularPrice={product.regularPrice}
          salePrice={product.salePrice}
          imageUrl="/images/p4.jpg"
        />
        <ProductCard
          productName="Elan Unity Bracelet"
          discount="49"
          productColor="gold"
          regularPrice="35"
          salePrice="69"
          imageUrl="/images/p5.jpg"
        />
        <ProductCard
          productName="Elan Lumine Necklace Gold"
          discount={product.discount}
          regularPrice={product.regularPrice}
          productColor="gold"
          salePrice={product.salePrice}
          imageUrl="/images/p6.jpg"
        />
        <ProductCard
          productName="Elan Bracelet Rose Gold"
          discount={product.discount}
          regularPrice={product.regularPrice}
          productColor="rose gold"
          salePrice={product.salePrice}
          imageUrl="/images/p7.jpg"
        />
        <ProductCard
          productName="Crystal Link Bracelet Silver"
          discount={product.discount}
          regularPrice={product.regularPrice}
          productColor="Silver"
          salePrice={product.salePrice}
          imageUrl="/images/p8.jpg"
        />
        <ProductCard
          productName="Classic Ring"
          discount="49"
          regularPrice="39"
          salePrice="20"
          productColor="gold"
          imageUrl="/images/p9.jpg"
        />
        <ProductCard
          productName={product.productName}
          discount={product.discount}
          regularPrice={product.regularPrice}
          salePrice={product.salePrice}
          productColor="rose gold"
          imageUrl="/images/p10.jpg"
        />
        <ProductCard
          productName="Tide Mesh Bracelet Evergold 2.8"
          discount="49"
          productColor="gold"
          regularPrice="30"
          salePrice="59"
          imageUrl="/images/p22.jpg"
        />
        <ProductCard
          productName="Classic Tennis Bracelet Gold"
          regularPrice="69"
          productColor="gold"
          imageUrl="/images/p21.jpg"
        />
        <ProductCard
          productName="Classic Bracelet Rose Gold"
          productColor="rose gold"
          regularPrice="69"
          imageUrl="/images/p23.jpg"
        />
      </div>

      <div className="grid justify-center items-center p-6 rounded-md">
        <p className="text-center  text-black font-light">
          Showing items 1-28 of 80
        </p>
        <div className="flex gap-4  justify-center">
          <a href="#" className="w-8 h-8 flex justify-center items-center border border-gray-200 bg-white text-[#74612f] text-sm rounded-full transition-all hover:bg-[#d8b861] hover:text-white">
            1
          </a>
          <a href="#" className="w-8 h-8 flex justify-center items-center border border-gray-200 bg-white text-[#816c31] text-sm rounded-full transition-all hover:bg-[#d8b861] hover:text-white">
            2
          </a>
          <a href="#" className="w-8 h-8 flex justify-center items-center border border-gray-200 bg-white text-[#927a39] text-sm rounded-full transition-all hover:bg-[#d8b861] hover:text-white">
            3
          </a>
        </div>
      </div>
    </main>
  );
}
