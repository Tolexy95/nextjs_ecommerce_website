"use client";

import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IconButton } from "@mui/material";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { useAppSelector} from "@/lib/hooks";



const ContactInfo: React.FC = () => (
  <div className="bg-[hsla(165,58%,33%,1)] hidden lg:flex text-[hsla(0,0%,100%,1)] items-center justify-between px-6 text-base font-bold h-16">
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-2">
        <FaPhone className="w-5 h-5" />
        <h6>(225) 555-0118</h6>
      </div>
      <div className="flex items-center gap-2">
        <BsEnvelope className="w-5 h-5" />
        <h6>michelle.rivera@example.com</h6>
      </div>
    </div>

    <h6>Follow Us and get a chance to win 80% off</h6>

    <div className="flex items-center gap-3">
      <h6>Follow Us :</h6>
      <AiOutlineInstagram className="w-5 h-5" />
      <BsYoutube className="w-5 h-5" />
      <FaFacebook className="w-5 h-5" />
      <FaTwitter className="text-white w-5 h-5" />
    </div>
  </div>
);

const Navigation: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  // Retrieve cart quantity from Redux state
  const totalQuantities = useAppSelector((state) => state.cart.totalQuantities);
  const totalWishlist = useAppSelector((state) => state.wishlist.totalWishlist);


  return (
    <>
        <div className="flex items-center justify-between px-6 mt-7">
          <h3 className="text-blue-dark text-2xl font-bold">Bandage</h3>
          <ul className="DESKTOP-MENU hidden lg:flex items-center font-bold text-gray-light gap-5 ">
            <li>
              <Link href="/" className="text-base">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link className="text-base text-blue-dark" href="/shop">
                Shop
              </Link>
              <FaAngleDown className="hover:text-[hsla(202,87%,54%,1)]" />
            </li>
            <li>
              <Link className="" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="" href="/pages">
                Pages
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-5 lg:text-[hsla(202,87%,54%,1)]">
            <div className="hidden lg:flex items-center gap-2">
              <FaUser className="" />
              <Link href="/login" className="">
                Login / Register
              </Link>
            </div>

            <IoSearchOutline className="" />

            <div className="flex items-center gap-2">
              <Link href="/cart">
                <button
                  type="button"
                  className="flex items-center gap-3"
                >
                  <IoCartSharp className="h-5 w-5" />
                  <span className="text-sm font-bold">{totalQuantities}</span>
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Link href="/wishlist">
                  <button
                    type="button"
                    className="flex items-center gap-3"
                  >
                    <MdOutlineFavoriteBorder className="h-5 w-5" />
                    <span className="text-sm font-bold">{totalWishlist}</span>
                  </button>
                </Link>
              </div>
            </div>

            <section className="MOBILE-MENU flex lg:hidden">
              <IconButton
                className="HAMBURGER-ICON "
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="6" x2="2" y2="6" />
                  <line x1="22" y1="12" x2="8" y2="12" />
                  <line x1="22" y1="18" x2="12" y2="18" />
                </svg>
              </IconButton>
              <div className={isNavOpen ? "showMenuNav" : "hidden"}>
                <button
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8 "
                  onClick={() => setIsNavOpen(false)}
                >
                  <IoMdClose />
                </button>

                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col gap-y-6 items-center justify-center min-h-[250px] -mt-28">
                  <li>
                    <Link href="/" className="text-base ">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-base text-blue-dark my-6"
                      href="/shop"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link className="" href="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="" href="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="" href="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="" href="/pages">
                      Pages
                    </Link>
                  </li>
                  <button>
                    <Link href="/login" className="">
                      Login / Register
                    </Link>
                  </button>
                </ul>
              </div>
            </section>
          </div>
          <style>{`
            .showMenuNav {
              position: absolute;
              width: 100%;
              height: 100vh;
              top: 0;
              left: 0;
              background: white;
              z-index: 10;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              align-items: center;
            }
          `}</style>
        </div>
    </>
  );
};

const Header: React.FC = () => (
  <div className="font-montserrat ">
    <ContactInfo />
    <Navigation />
  </div>
);

export default Header;