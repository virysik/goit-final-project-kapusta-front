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
      providesTags: ['outTransactions'],
    }),
    getSummaryInc: builder.query({
      query: year => `/transactions/incomings?year=${year}`,
      providesTags: ['incTransactions'],
    }),
    incTransDate: builder.query({
      query: credentials => ({
        url: `/transactions/incomings/date`,
        params: credentials,
      }),
      providesTags: ['incTransactions'],
    }),
    outTransDate: builder.query({
      query: credentials => ({
        url: `/transactions/outgoings/date`,
        params: credentials,
      }),
      providesTags: ['outTransactions'],
    }),
    detailInfo: builder.query({
      query: credentials => ({
        url: `/transactions`,
        params: credentials,
      }),
    }),
    detailInfoForReport: builder.query({
      query: credentials => ({
        url: `/transactions/forReports`,
        params: credentials,
      }),
      providesTags: ['outTransactions', 'incTransactions'],
    }),
    deleteTransaction: builder.mutation({
      query: id => ({
        url: `/transactions/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['incTransactions', 'outTransactions'],
    }),
    addOutTransaction: builder.mutation({
      query: credentials => ({
        url: `/transactions/outgoings`,
        body: credentials,
        method: 'POST',
      }),
      invalidatesTags: ['outTransactions'],
    }),
    addIncTransaction: builder.mutation({
      query: credentials => ({
        url: `/transactions/incomings`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['incTransactions'],
    }),
  }),
});

export const {
  useGetSummaryOutQuery,
  useGetSummaryIncQuery,
  useIncTransDateQuery,
  useOutTransDateQuery,
  useDeleteTransactionMutation,
  useAddOutTransactionMutation,
  useAddIncTransactionMutation,
  useDetailInfoQuery,
  useDetailInfoForReportQuery,
} = transactionApi;

// axios.defaults.baseURL = 'https://kapusta-team-project.herokuapp.com/api';
// axios.defaults.baseURL = 'https://kapusta-group-8.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:3030/api';
