import React from "react";

export default function Footer() {
  return (
    <footer id="#footer" className="bg-[#b5a477] text-black py-5  text-center font-sans ">
        {/* About Section */}
        <div className="text-center">
          <h3 className="font- font-medium text-3xl tracking-[4px] uppercase mb-1">AURORA LUXE</h3>
          <p className="">
            Luxury jewelry crafted with precision and elegance. Discover timeless pieces to elevate your style.
          </p>
          </div>
  
        {/* Footer Links */}
        <div className="flex flex-wrap justify-between max-w-[1200px] px-5 mx-auto gap-[8vw]">
          {[
            { title: "COMPANY", links: ["About", "Features", "Works", "Career"] },
            { title: "HELP", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
            { title: "FAQ", links: ["Account", "Manage Deliveries", "Orders", "Payments"] },
            { title: "RESOURCES", links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"] }
          ].map((section) => (
            <div key={section.title} className="text-left ">
              <div className="text-[20px] mb-3 font-normal">{section.title}</div>
              <div className="flex flex-col gap-[10px] text-sm text-black/60">
                {section.links.map((link) => (
                  <a key={link} href="#" className="hover:text-black/40 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      {/* Footer Bottom */}
      <div className="mt-5 border-t border-black/50 pt-2 text-xs tracking-wider">
        <h6>&copy; 2025 AURORA LUXE. All rights reserved.</h6>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center mb-10 gap-5 mt-5">
        {[
          "/images/twitter.svg",
          "/images/facebook.svg",
          "/images/github.svg",
          "/images/instagram.svg"
        ].map((icon, index) => (
          <img key={index} src={icon} alt="social-icon" className="w-7 h-7 rounded-sm cursor-pointer transition-transform duration-300 hover:scale-110" />
        ))}
      </div>
    </footer>
  );
}
