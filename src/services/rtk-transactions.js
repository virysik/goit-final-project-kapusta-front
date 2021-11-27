import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const transactionApi = createApi({
  reducerPath: 'transactionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kapusta-team-project.herokuapp.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['incTransactions', 'outTransactions'],
  endpoints: builder => ({
    getSummaryOut: builder.query({
      query: year => `/transactions/outgoings?year=${year}`,
    }),
    getSummaryInc: builder.query({
      query: year => `/transactions/incomings?year=${year}`,
    }),
    incTransDate: builder.query({
      query: credentials => ({
        url: `/transactions/incomings/date`,
        params: credentials,
        providesTags: ['incTransactions'],
      }),
    }),
    outTransDate: builder.query({
      query: credentials => ({
        url: `/transactions/outgoings/date`,
        params: credentials,
        providesTags: ['outTransactions'],
      }),
    }),
    deleteTransaction: builder.mutation({
      query: id => ({
        url: `/transactions/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['incTransactions', 'outTransactions'],
    }),
  }),
});

export const {
  useGetSummaryOutQuery,
  useGetSummaryIncQuery,
  useIncTransDateQuery,
  useOutTransDateQuery,
  useDeleteTransactionMutation,
} = transactionApi;

// axios.defaults.baseURL = 'https://kapusta-team-project.herokuapp.com/api';
// axios.defaults.baseURL = 'https://kapusta-group-8.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:3030/api';
