import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TGame } from '../../entities/game';
import { configureStore } from '@reduxjs/toolkit';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getGames: builder.query<TGame[], void>({
      query: () => 'api/game/list?partner_name=belparyaj',
      transformResponse: (response: { result: TGame[] }) => response.result,
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesApi.middleware),
});
