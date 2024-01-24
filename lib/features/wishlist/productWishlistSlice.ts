import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface WishlistItem {
  _id: number;
  name: string;
  price: number;
  images: string;
  thumbnail: string;
  description: string;
}

interface WishlistState {
  wishlistItems: WishlistItem[];
  totalWishlist: number;
  isWishlistOpen: boolean;
}

const initialState: WishlistState = {
  wishlistItems: JSON.parse(localStorage.getItem("wishlistItems") ?? "[]"),
  totalWishlist: Number(localStorage.getItem("totalWishlist")) || 0,
  isWishlistOpen: false,
};

const productWishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state) => {
      state.isWishlistOpen = !state.isWishlistOpen;
    },
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const { _id, name, price, thumbnail, description, images } = action.payload;
      const existingItem = state.wishlistItems.find((item) => item._id === _id);

      if (!existingItem) {
        const newItem: WishlistItem = {
          _id,
          name,
          price,
          images,
          thumbnail,
          description,
        };

        state.wishlistItems.push(newItem);
        state.totalWishlist++;

        toast.success(`${name} is added to the wishlist!`);
      } else {
        toast.info(`${name} is already in your wishlist!`);
      }

      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
      localStorage.setItem("totalWishlist", JSON.stringify(state.totalWishlist));

      return state;
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      const productIdToRemove = action.payload;

      // Find the item to be removed
      const itemToRemove = state.wishlistItems.find((item) => item._id === productIdToRemove);

      if (itemToRemove) {
        // Update totalWishlist before removing the item
        state.totalWishlist--;

        // Remove the item from the wishlistItems array
        state.wishlistItems = state.wishlistItems.filter((item) => item._id !== productIdToRemove);

        // Update localStorage with the updated wishlistItems and totalWishlist
        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
        localStorage.setItem("totalWishlist", JSON.stringify(state.totalWishlist));

        toast.info(`${itemToRemove.name} is removed from the wishlist!`);
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
  toggleWishlist,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = productWishlistSlice.actions;

export default productWishlistSlice.reducer;
