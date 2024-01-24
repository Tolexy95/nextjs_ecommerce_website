"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { CartItemsEmpty } from "../components/CartItemsEmpty";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { handleQuantityChange, onRemove } from "@/lib/features/cart/CartSlice";
import { shimmer, toBase64 } from "@/lib/image";

export function CartItems() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  if (cartItems.length === 0) return <CartItemsEmpty context="cart" />;

  return (
    <div
      role="list"
      className="divide-y divide-gray-600 border-y border-gray-600 dark:divide-gray-500 dark:border-gray-500 font-montserrat"
    >
      {cartItems.map((product, productIdx) => (
        <div key={product._id} className="flex flex-col md:flex-row md:justify-between md:items-start md:gap-8 gap-4 py-6 sm:py-10">
          <div className="rounded-lg border-5 border-gray-600 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(200, 200))}`}
              src={product.images}
              alt={product.title || ''}
              width={600} 
              height={600}
              className="object-cover object-center h-40 w-40"
            />
          </div>

            <div className="flex flex-col gap-3 md:gap-8">
              <h3 className="text-sm">{product.title}</h3>
              <p className="text-sm font-semibold">$ {product.price}</p>
              <p className="text-sm font-semibold">{product.description}</p>
              <h1 className="font-bold text-lg">Total price: <span className="font-normal">$ {product.price * product.quantity}</span></h1>
            </div>

            <div className="flex gap-6 w-32 mt-4">
              <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                Quantity, {product.title}
              </label>
              <input
                id={`quantity-${productIdx}`}
                name={`quantity-${productIdx}`}
                type="number"
                className="w-full"
                min={1}
                max={10}
                value={product.quantity}
                onChange={(e) => {
                  const newQuantity = Number(e.target.value);

                  // Check if the input is a positive integer and within the specified range
                  if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= 10) {
                    // Dispatch the handleQuantityChange action with the correct payload
                    dispatch(
                      handleQuantityChange({
                        productId: product._id,
                        newQuantity,
                      })
                    );
                  }
                }}
              />

              <button
                type="button"
                className=""
                onClick={() => dispatch(onRemove(product))}
              >
                <span className="sr-only">Remove</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
      ))}
    </div>
   
  );
}
