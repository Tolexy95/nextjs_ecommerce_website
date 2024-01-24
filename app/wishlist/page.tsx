"use client"
import React from "react";
import WishlistItems from "../components/WishlistItems";
import { IoMdClose } from "react-icons/io";

// Define the interface for props
interface WishListPageProps {
  onClose: () => void;
}

// Define the WishListPage component
const WishListPage: React.FC<WishListPageProps> = ({ onClose }) => {
  return (
    <div className="px-10 bg-[hsl(210,26%,78%,0.1)] w-full relative">
      <main className="mx-auto  px-4 pb-24 pt-16 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Wishlist
        </h1>

        <form className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <section aria-labelledby="wishlist-heading" className="">
            <h2 id="wishlist-heading" className="sr-only">
              Items in your wishlist
            </h2>
            {/* Wishlist Items */}
            <WishlistItems />
          </section>
        </form>
      </main>

      <button type="button" onClick={onClose} className="absolute top-0 right-0 p-10">
        <IoMdClose className="w-9 h-9 font-bold" />
      </button>
    </div>
  );
};

export default WishListPage;
