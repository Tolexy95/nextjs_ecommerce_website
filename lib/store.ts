import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/CartSlice';
import productWishlistReducer from './features/wishlist/productWishlistSlice'
import { productApiSlice } from '@/app/api/apiSlice';
import { uniqueProductApiSlice } from '@/app/api/productSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      wishlist:productWishlistReducer,
      [productApiSlice.reducerPath]: productApiSlice.reducer,
      [uniqueProductApiSlice.reducerPath]: uniqueProductApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
      .concat(productApiSlice.middleware)
      .concat(uniqueProductApiSlice.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
