import { baseUrl } from './baseUrl';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const tokenStorage = getToken(getState());
    if (tokenStorage.accessToken) {
      if (tokenStorage.accessToken.trim().length > 0) {
        headers.set('authorization', `Bearer ${tokenStorage.accessToken}`);
      }
    }
    return headers;
  },
});

const getToken = (state: any) => state.authState;

export const baseApi = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
