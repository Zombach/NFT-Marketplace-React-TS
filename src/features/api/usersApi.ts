import { UserInfo } from '@models/User';
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
  }),
  overrideExisting: false,
});

export const { useLazyGetCurrentUserQuery } = usersApi;
