import { User, UserInfo } from '@models/User';
import { baseApi } from './baseApi';
import { setUserInfo } from '@pages/LogIn/AuthSlice';

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<UserInfo, void>({
      query: () => ({
        url: 'users/current',
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUserInfo(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    addUser: builder.mutation<number, User>({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body,
      }),
    }),
    getUsers: builder.query<UserInfo[], void>({
      query: () => 'users',
    }),
    getUser: builder.query<UserInfo, string>({
      query: (id) => `users/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetCurrentUserQuery, useAddUserMutation, useGetUsersQuery, useGetUserQuery } = usersApi;
