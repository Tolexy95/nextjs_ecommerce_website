import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const uniqueProductApiSlice = createApi({
  reducerPath: 'uniqueProductApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getIndividualProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {useGetIndividualProductQuery } = uniqueProductApiSlice;
