import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGNiYjUwNTVlYTA2YTQ4ZGUyYTgyZSIsImlhdCI6MTcwODk2NTQ5MywiZXhwIjoxNzA5MjI0NjkzfQ.Vll2MZ7yhEa8vd_sOIowIdjO71vrEGgs3m9-fgXoQjk';
// const PROD = 'https://47bf-197-210-85-137.ngrok-free.app/api/v1';
const PROD = 'https://socialmedia-api-svgo.onrender.com/api/v1'
export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    // tagTypes: ['wallets', "bills", 'vaults'],
    baseQuery: fetchBaseQuery({ baseUrl: PROD}),
    keepUnusedDataFor: 10,
    endpoints:() => ({})
})
