import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// const PROD = 'https://47bf-197-210-85-137.ngrok-free.app/api/v1';
const PROD = 'https://socialmedia-api-svgo.onrender.com/api/v1'
export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    // tagTypes: ['wallets', "bills", 'vaults'],
    baseQuery: fetchBaseQuery({ baseUrl: PROD}),
    keepUnusedDataFor: 10,
    endpoints:() => ({})
})
