"use client"
import React from "react";
import WishlistItems from "../components/WishlistItems";
import { IoMdClose } from "react-icons/io";

// Define the interface for props
interface WishListPageProps {
}

// Define the WishListPage component
const WishListPage: React.FC<WishListPageProps> = () => {
  return (
    <div className="px-10 bg-[hsl(210,26%,78%,0.1)] w-full mt-10">
      <main className="mx-auto  px-4 pb-24 pt-16 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
          Wishlist
        </h1>

        <form className="mt-12">
          <section aria-labelledby="wishlist-heading" className="">
            <h2 id="wishlist-heading" className="sr-only">
              Items in your wishlist
            </h2>
            {/* Wishlist Items */}
            <WishlistItems />
          </section>
        </form>
      </main>
    </div>
  );
};

export default WishListPage;
