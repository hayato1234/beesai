import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/user/",
    prepareHeaders: (headers, { getState }) => {
      const bearer = "Bearer " + localStorage.getItem("token");
      headers.set("Authorization", bearer);
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => `cart`,
      providesTags: ["User"],
    }),
    getCartItem: builder.query({
      query: (id) => `cart/${id}`,
      providesTags: ["User"],
    }),
    addToCart: builder.mutation({
      query: (payload) => ({
        url: "cart",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetCartQuery, useAddToCartMutation } = userApi;
