"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  _id: number;
  title: string;
  price: number;
  quantity: number;
  images:string;
  thumbnail: string;
  description:string;
}

interface CartState {
  cartItems: CartItem[];
  totalPrice: number;
  totalQuantities: number;
  quantity: number;
  isCartOpen: boolean;
}

const initialState: CartState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems") ?? "[]") as CartItem[],
  totalPrice: Number(localStorage.getItem("totalPrice")) || 0,
  totalQuantities: Number(localStorage.getItem("totalQuantities")) || 0,
  quantity: 1,
  isCartOpen: false, 
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart: (
      state,
      action: PayloadAction<{ product: CartItem; quantity: number }>
    ) => {
      const { product, quantity } = action.payload;
      const checkProductInCart = state.cartItems.find(
        (item) => item._id === product._id
      );

      state.totalPrice += product.price * quantity;
      state.totalQuantities += quantity;

      if (checkProductInCart) {
        const updatedCartItems = state.cartItems.map((cartProduct) => {
          if (cartProduct._id === product._id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          }
          return cartProduct;
        });

        state.cartItems = updatedCartItems;
      } else {
        product.quantity = quantity;
        state.cartItems.push({ ...product });
      }

      // Reset quantity to 1 after adding an item to the cart
      state.quantity = 1;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalQuantities", JSON.stringify(state.totalQuantities));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
       },

    incQty: (state) => {
      state.quantity += 1;
    },
    decQty: (state) => {
      if (state.quantity - 1 < 1) {
        state.quantity = 1;
      } else {
        state.quantity -= 1;
      }
    },
    onRemove: (state, action: PayloadAction<CartItem>) => {
      let getProduct;
    
      getProduct = state.cartItems.find((item) => item._id === action.payload._id);
    
      if (getProduct) {
        // Update total quantities and total price before removing the item
        state.totalQuantities -= getProduct.quantity;
        state.totalPrice -= getProduct.price * getProduct.quantity;
    
        state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
      }
    
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalQuantities", JSON.stringify(state.totalQuantities));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    
  
  
    handleQuantityChange: (
      state,
      action: PayloadAction<{ productId: number; newQuantity: number }>
    ) => {
      const foundProductIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload.productId
      );

      if (foundProductIndex !== -1) {
        const updatedCartItems = [...state.cartItems];

        updatedCartItems[foundProductIndex].quantity =
          action.payload.newQuantity;

        state.cartItems = updatedCartItems;

        const updatedTotalQuantities = updatedCartItems.reduce(
          (acc, item) => acc + item.quantity,
          0
        );
        state.totalQuantities = updatedTotalQuantities;

        const updatedTotalPrice = updatedCartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        state.totalPrice = updatedTotalPrice;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        localStorage.setItem("totalQuantities",JSON.stringify(state.totalQuantities));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantities = 0;
      state.totalPrice = 0;
    
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalQuantities", JSON.stringify(state.totalQuantities));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    
  },
});

export const {
  toggleCartOpen,
  addToCart,
  incQty,
  decQty,
  onRemove,
  handleQuantityChange,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
