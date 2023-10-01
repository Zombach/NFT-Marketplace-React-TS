import { Product } from '@models/Product';
import { ReponseModel } from '@pages/CreateNFT/CreateNFT';
import { baseApi } from './baseApi';

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
    getProduct: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
    getUserProducts: builder.query<Product[], string>({
      query: (userId) => `products/created/${userId}`,
    }),
    addProduct: builder.mutation<number, Product>({
      query: (body) => ({
        url: 'products',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery, useGetProductQuery, useGetUserProductsQuery, useAddProductMutation } = productsApi;
