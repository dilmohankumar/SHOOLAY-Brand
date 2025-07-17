import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="py-4 cursor-pointer hover:bg-[#80008226] bg-[#80008233] border border-gray-200 text-[oklch(0.4_0.21_268.29)] text-center flex items-center justify-center"
      >
        <h1>Back to Top</h1>
      </div>
      <div className="p-12 bg-[#80008240]">
        <div className="flex justify-between list-none">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">About Us</h1>
            <li>About Us</li>
            <li>Contacts Us</li>
            <li>Careers</li>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Customer Service</h1>
            <li>Shipping policy</li>
            <li>Returns Policy</li>
            <li>FAOs</li>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Categories</h1>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Connect with Us</h1>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </div>
        </div>
      </div>

      {/* ---------------copy right----------------- */}

      <div className="w-full border-t border-gray-500 text-center text-sm text-[oklch(0.4_0.21_268.29)] py-4 bg-[#80008240]">
        © 2025 shoolay. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
