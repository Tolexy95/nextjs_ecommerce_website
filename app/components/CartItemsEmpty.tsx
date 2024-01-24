"use client"

import Link from "next/link";
import { Plus, XCircle } from "lucide-react";

interface CartItemsEmptyProps {
  context: "cart" | "wishlist";
}

export function CartItemsEmpty({ context }: CartItemsEmptyProps) {
  const isCartContext = context === "cart";

  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border-2 border-dashed border-gray-300 dark:border-gray-800 font-montserrat">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <XCircle className="h-10 w-10 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold">
          {isCartContext ? "Your cart is empty" : "Your wishlist is empty"}
        </h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          {isCartContext ? "Add products to your cart." : "Add products to your wishlist."}
        </p>
        <Link href="/">
          <button className="flex items-center">
            <Plus className="mr-2 h-4 w-4" />
            Add Products
          </button>
        </Link>
      </div>
    </div>
  );
}
