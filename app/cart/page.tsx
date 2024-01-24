"use client"
import React from "react"
import { CartItems } from "../components/CartItems"
import { CartSummary } from "../components/CartSummary"
import { IoMdClose } from "react-icons/io";

interface CartPopPageProps {
  onClose: () => void;
  [key: string]: never;
}

const CartPopPage: React.FC<CartPopPageProps> = ({ onClose }) => {
  return (
    <div className="px-10 bg-[hsl(210,26%,78%,0.1)] relative ">  
      <main className="mx-auto  px-4 pb-24 pt-16 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ">
          <section aria-labelledby="cart-heading" className="">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            {/* Cart Items */}
          <CartItems/>
          </section>
          {/* Cart Summary */}
          <CartSummary/>
        </form>
      </main>

      <button type="button" onClick={onClose} className="absolute top-0 right-0 p-10">
        <IoMdClose className="w-9 h-9 font-bold" />
      </button>
    </div>
  )
}

export default CartPopPage;
