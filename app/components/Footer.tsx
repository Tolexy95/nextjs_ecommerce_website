"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="font-montserrat mt-10">
      <div className="bg-[hsl(210,26%,78%,0.1)] p-6 mt-2 flex flex-col gap-5 md:gap-0 md:flex-row md:items-center md:justify-between md:px-[12rem] md:py-9">
        <h1 className="text-blue-dark text-2xl font-bold">Bandage</h1>
        <div className="text-[hsla(202,87%,54%,1)] flex gap-5 items-center">
          <AiOutlineInstagram className="w-6 h-6" />
          <BsYoutube className="w-6 h-6" />
          <FaFacebook className="w-6 h-6" />
          <FaTwitter className="text-white w-6 h-6" />
        </div>
      </div>
      <div>
        <div className="flex lg:flex-row flex-col lg:gap-14 gap-8 lg:ml-60 ml-11 mt-7">
        <div className="font-bold">
            <h1 className="mb-4 text-base text-blue-dark">Company Info</h1>
            <div className="flex flex-col text-gray-light gap-2 text-sm">
              <Link href="/">About us</Link>
              <Link href="/">carrier</Link>
              <Link href="/">We are hiring</Link>
              <Link href="/">Blog</Link>
            </div>
          </div>

          <div className="font-bold">
            <h1 className="mb-4 text-base text-blue-dark">Legal</h1>
            <div className="flex flex-col text-gray-light gap-2 text-sm">
              <Link href="/">About us</Link>
              <Link href="/">carrier</Link>
              <Link href="/">We are hiring</Link>
              <Link href="/">Blog</Link>
            </div>
          </div>        
         
          <div className="font-bold">
            <h1 className="mb-4 text-base text-blue-dark">features</h1>
            <div className="flex flex-col text-gray-light gap-2 text-sm">
              <Link href="/">Business Marketing</Link>
              <Link href="/">User Analytics</Link>
              <Link href="/">Live chat</Link>
              <Link href="/">Unlimited support</Link>
            </div>
          </div>  
          
          <div className="font-bold">
            <h1 className="mb-4 text-base text-blue-dark">Resources</h1>
            <div className="flex flex-col text-gray-light gap-2 text-sm">
              <Link href="/">IOS & Android</Link>
              <Link href="/">Watch a Demo</Link>
              <Link href="/">Customers</Link>
              <Link href="/">API</Link>
            </div>
          </div> 
          <div className="p-5 md:p-0">
            <h1 className="mb-3 text-base font-bold text-blue-dark">Get in Touch</h1>
            <div className="border flex bg-[hsla(0,0%,90%,1)] rounded-md md:max-w-80">
             <div className="py-6 px-5">
             <input
                type="text"
                placeholder="your Email"
                className="w-full"
              />
             </div>
             
              <button className="bg-[hsla(202,87%,54%,1)] text-white w-full p-6">
                Subscribe
              </button>
            </div>
            <p>Lore imp sum dolor Amit </p>
          </div>
        </div>
      </div>

      <div className="bg-[hsl(210,26%,78%,0.1)] lg:py-2 py-8 mt-14">
        <div className="">
          <h6 className="text-gray-light font-bold text-base lg:mt-3 text-center p-4">
            Made With Love By Finland All Right Reserved
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
