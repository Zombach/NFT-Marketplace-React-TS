import { Product } from '@models/Product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3309/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
    getProduct: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
    getUserProducts: builder.query({
      query: (userId) => `products/created/${userId}`,
    }),
    addProduct: builder.mutation({
      query: (body) => ({
        url: 'products',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery, useGetUserProductsQuery } = productsApi;
