import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const PROD = 'https://talebookapi.vercel.app/api/v1'
export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    // tagTypes: ['wallets', "bills", 'vaults'],
    baseQuery: fetchBaseQuery({ baseUrl: PROD}),
    keepUnusedDataFor: 10,
    endpoints:() => ({})
})
