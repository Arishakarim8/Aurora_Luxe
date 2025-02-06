import React from "react";
import MenuWithCut from "./Menu";

export default function Header() {
  return (
    <nav>
      <header className="bg-[#938257] h-8 text-white w-full text-xs flex items-center justify-center tracking-wide font-semibold px-2">
        SALE STARTS NOW
      </header>

      <ul className="news flex flex-wrap justify-around items-center bg-[#F0F0F0] w-full text-sm font-light text-[#00000099] tracking-wide py-2 gap-8">
        <li className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.875 18.4937V5.23688L12.0625 0L0.25 5.23688V18.4937L12.0625 23.7306L23.875 18.4937ZM12.0625 9.975L2.20039 5.6028L6.97494 3.48609L16.8375 7.8573L12.0625 9.975ZM18.2245 7.2433L8.36274 2.87083L12.0625 1.2306L21.9246 5.60281L18.2245 7.2433ZM22.75 17.7619V6.46746L12.6245 10.9563L12.625 22.2506L22.75 17.7619ZM1.375 17.7619L11.5 22.2506L11.4995 10.9553L1.375 6.46742V17.7619ZM20.875 16.3193L15.25 18.8037V13.3363L20.875 10.8519V16.3193ZM16.375 14.0693V17.0769L19.75 15.5863V12.5787L16.375 14.0693Z" fill="#00081C"></path>
          </svg>
          Free shipping
        </li>
        <li className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.9715 8.44723L23.7449 5.06013L14.5871 0.25L11.9738 3.25441L9.38435 0.250419L0.258898 5.08553L3.0222 8.5365L0.25 11.8806L3.18524 13.5566V18.8764L11.9977 23.5149L20.8102 18.8764V13.5629L23.7211 11.881L20.9715 8.44723ZM19.0337 8.44276L11.9792 4.75052L4.95911 8.52939L11.9937 12.12L19.0337 8.44276ZM19.6852 14.2129L15.1519 16.8322L12.5602 14.1477V21.9475L19.6852 18.1972V14.2129ZM11.4352 14.1503L8.88042 16.8084L4.31024 14.199V18.1972L11.4352 21.9475V14.1503ZM20.1027 7.73249L12.8648 3.94426L14.8519 1.65981L22.0006 5.41467L20.1027 7.73249ZM3.89385 7.82518L1.98658 5.44328L9.11813 1.66464L11.0896 3.95174L3.89385 7.82518ZM12.9237 12.9044L20.098 9.15617L22.0244 11.562L15.3505 15.4181L12.9237 12.9044ZM3.89326 9.2485L1.97073 11.5677L8.67705 15.3969L11.0585 12.9154L3.89326 9.2485Z" fill="#00081C"></path>
          </svg>
          Free return
        </li>
        <li className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.125 5.04583V0.25H6.75V5.04583C4.48878 6.55944 3 9.13711 3 12.0625C3 14.9879 4.48878 17.5656 6.75 19.0792V23.8593H16.125V19.0792C17.8363 17.9337 19.1051 16.1788 19.6211 14.125H20.4375L20.5468 14.1187C21.0131 14.0645 21.375 13.6683 21.375 13.1875V10.9375L21.3687 10.8282C21.3145 10.3619 20.9183 10 20.4375 10H19.6211C19.1051 7.94619 17.8363 6.19131 16.125 5.04583ZM15 4.41175V1.375H7.875V4.41175C8.9573 3.90693 10.1645 3.625 11.4375 3.625C12.7105 3.625 13.9177 3.90693 15 4.41175ZM19.8235 11.125C19.8575 11.4328 19.875 11.7456 19.875 12.0625C19.875 12.3794 19.8575 12.6922 19.8235 13H20.25V11.125H19.8235ZM15 19.7133C13.9177 20.2181 12.7105 20.5 11.4375 20.5C10.1645 20.5 8.9573 20.2181 7.875 19.7133V22.7343H15V19.7133ZM8.80912 9.76524L8.06588 10.6098L11.4779 13.6126L15.9622 9.08326L15.1628 8.29174L11.4248 12.0672L8.80912 9.76524ZM11.4375 4.75C7.39892 4.75 4.125 8.02392 4.125 12.0625C4.125 16.1011 7.39892 19.375 11.4375 19.375C15.4761 19.375 18.75 16.1011 18.75 12.0625C18.75 8.02392 15.4761 4.75 11.4375 4.75Z" fill="#00081C"></path>
          </svg>
          2 years warranty
        </li>
      </ul>

      <div className="w-full bg-white flex flex-col items-center font-cursive font-medium text-2xl tracking-widest shadow-md py-2">
        <div className="text-[#715D2B]">AURORA LUXE</div>

        <div className="flex justify-between w-[98%]">
          <div className="flex w-full justify-between items-end">
          <MenuWithCut />

            {[
              { icon: "/images/search.svg", alt: "Search" },
              { icon: "/images/favourite.svg", alt: "Favorites" },
              { icon: "/images/cart.svg", alt: "Cart" },
            ].map((item, index) => (
              <img key={index} src={item.icon} alt={item.alt} className="w-5 h-5 cursor-pointer hover:scale-105 transition-transform" />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}