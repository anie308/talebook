import { apiSlice } from "@/services/api";

const postRoute = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getFeed: builder.query({
      query: ({ token }) => ({
        url: "/post/feed",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
    useGetFeedQuery,
} = postRoute;
