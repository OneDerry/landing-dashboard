import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postUserApiSlice = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/todos",
      providesTags: ["Todos"],
    }),
    addPosts: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    updatePosts: builder.mutation({
      query: (todo) => ({
        url: `/posts/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    deletePosts: builder.mutation({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostsMutation,
  useUpdatePostsMutation,
  useDeletePostsMutation,
} = postUserApiSlice;
