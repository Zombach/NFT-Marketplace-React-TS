import { Token, UserLogin } from '@models/User';
import { baseApi } from './baseApi';
import { logout, setToken } from '@pages/LogIn/AuthSlice';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<Token, UserLogin>({
      query: (body) => ({
        url: 'auth/sign-in',
        method: 'POST',
        body,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          dispatch(logout());
          const { data } = await queryFulfilled;
          dispatch(setToken(data));
        } catch (error: any) {
          if (error?.error?.status === 400) {
            dispatch(logout());
          } else {
            console.log(error);
          }
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useSignInMutation } = authApi;
