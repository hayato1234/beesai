import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const bearer = "Bearer " + JSON.parse(localStorage.getItem("token") || "null");

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
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => `cart`,
    }),
    getCartItem: builder.query({
      query: (id) => `cart/${id}`,
    }),
  }),
});

export const { useGetCartQuery } = userApi;
