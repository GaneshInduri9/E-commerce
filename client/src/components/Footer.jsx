import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className>
          <img src={assets.logo} alt="" className="w-32 mb-5" />
          <p className="w-full md:w-2/3 text-grey-500 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <p className="text-gray-900 text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 mb-5">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery </li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl text-gray-900 font-medium mb-3">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-500 mb-5">
            <li>+787099867263</li>
            <li>ganeshinduri4@gmail.com</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="mt-0">
        <hr />
        <p className="pt-2 text-sm text-gray-700 text-center mb-4">
          Copyright 2025@ FreshFynd - All Right Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
