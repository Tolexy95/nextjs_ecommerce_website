"use client"

import React from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { clearCart } from "@/lib/features/cart/CartSlice";

export function CartSummary() {
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const dispatch = useAppDispatch();

  // Calculate delivery estimate as 2% of the subtotal and round up to the nearest whole number
  const deliveryEstimate = Math.ceil(totalPrice * 0.02);

  // Calculate the order total
  const orderTotal = totalPrice + deliveryEstimate;

  const handleReset = () => {
    // Dispatch the clearCart action to clear all data from local storage
    dispatch(clearCart());
  };

  return (
    <section
      aria-labelledby="summary-heading"
      className="rounded-lg border-2 border-gray-200  px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 max-w-lg font-montserrat"
    >
      <h2 id="summary-heading" className="text-lg font-medium">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Subtotal</dt>
          <dd className="text-sm font-medium">$ {totalPrice}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center text-sm">
            <span>Delivery estimate</span>
          </dt>
          <dd className="text-sm font-medium">$ {deliveryEstimate}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">Order total</dt>
          <dd className="text-base font-medium">$ {orderTotal}</dd>
        </div>
        <button onClick={handleReset}>Reset</button>
      </dl>
    </section>
  );
}
