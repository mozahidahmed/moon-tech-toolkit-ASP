import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery:fetchBaseQuery({
    baseUrl:'https://moon-tech-6c99.onrender.com/',
    }),

    tagTypes:["Product"],
    endpoints: (builder) => ({
         getProducts: builder.query({
            query:()=>({
                url:"/products"}),
           providesTags:["Product"]
         }),
         addProducts: builder.mutation({
            query:(data)=>({
                url:"/product",
                method:"POST",
                body:data
            }),
            invalidatesTags:["Product"]
         }),
         removeProducts: builder.mutation({
            query:(id)=>({
                url:`/product/${id}`,
                method:"DELETE",
                
            }),
            invalidatesTags:["Product"]
         }),

        }),
  })

  export const {useGetProductsQuery,useAddProductsMutation,useRemoveProductsMutation}=productApi
  