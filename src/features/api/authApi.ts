import { Token, UserLogin } from '@models/User';
import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<Token, UserLogin>({
      query: (body) => ({
        url: 'auth/sign-in',
        method: 'POST',
        body,
      }),
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useSignInMutation } = authApi;
