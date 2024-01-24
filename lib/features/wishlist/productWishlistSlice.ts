"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { WishlistItem } from "@/app/types/types";


interface WishlistState {
  wishlistItems: WishlistItem[];
  totalWishlist: number;
}

const initialState: WishlistState = {
  wishlistItems: JSON.parse(localStorage.getItem("wishlistItems") ?? "[]"),
  totalWishlist: Number(localStorage.getItem("totalWishlist")) || 0,
};


const productWishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const { id, title, price, thumbnail, description, images } = action.payload;
      const existingItem = state.wishlistItems.find((item) => item.id === id);

      if (!existingItem) {
        const newItem: WishlistItem = {
          id,
          title,
          price,
          images,
          thumbnail,
          description,
        };

        state.wishlistItems.push(newItem);
        state.totalWishlist++;

        toast.success(`${title} is added to the wishlist!`);
      } else {
        toast.info(`${title} is already in your wishlist!`);
      }

      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
      localStorage.setItem("totalWishlist", JSON.stringify(state.totalWishlist));

      return state;
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      const productIdToRemove = action.payload;

      // Find the item to be removed
      const itemToRemove = state.wishlistItems.find((item) => item.id === productIdToRemove);

      if (itemToRemove) {
        // Update totalWishlist before removing the item
        state.totalWishlist--;

        // Remove the item from the wishlistItems array
        state.wishlistItems = state.wishlistItems.filter((item) => item.id !== productIdToRemove);

        // Update localStorage with the updated wishlistItems and totalWishlist
        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
        localStorage.setItem("totalWishlist", JSON.stringify(state.totalWishlist));

        toast.info(`${itemToRemove.title} is removed from the wishlist!`);
      }

      return state;
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];
      state.totalWishlist = 0;

      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
      localStorage.setItem("totalWishlist", JSON.stringify(state.totalWishlist));
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = productWishlistSlice.actions;

export default productWishlistSlice.reducer;
