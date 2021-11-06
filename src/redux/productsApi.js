import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.com/"}),
    endpoints: (builder) =>({
        getAllProducts: builder.query({
            query: () => "products?limit=12",
        }),
    }),
});

export const {useGetAllProductsQuery} = productsApi;