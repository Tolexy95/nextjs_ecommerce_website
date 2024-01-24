"use client"
import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { removeFromWishlist } from "../../lib/features/wishlist/productWishlistSlice";
import { shimmer, toBase64 } from "@/lib/image";
import { CartItemsEmpty } from "./CartItemsEmpty";



const WishlistItems: React.FC = () => {
  const wishlistItems = useAppSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useAppDispatch();

  if (wishlistItems.length === 0) return <CartItemsEmpty context="wishlist" />

  return (
    <div
      role="list"
      className="divide-y divide-gray-600 border-y border-gray-600 dark:divide-gray-500 dark:border-gray-500 font-montserrat w-full"
    >
      {wishlistItems.map((product) => (
        <div key={product.id} className="flex flex-col md:flex-row md:justify-between md:items-start md:gap-8 gap-4 py-6 sm:py-10">
          <div className="rounded-lg border-5 border-gray-600 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(200, 200))}`}
              src={product.images[0]}
              alt={product.title || ''}
              width={600} 
              height={600}
              className="object-cover object-center h-40 w-40"
            />
          </div>

          <div className="flex flex-col gap-3 md:gap-8 md:max-w-80">
            <h3 className="text-sm">{product.title}</h3>
            <p className="text-sm font-semibold">$ {product.price}</p>
            <p className="text-sm font-semibold">{product.description}</p>
          </div>

          <div className="flex gap-6 w-32 mt-4">
            <button
              type="button"
              className=""
              onClick={() => dispatch(removeFromWishlist(product.id))}
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

export default WishlistItems;
