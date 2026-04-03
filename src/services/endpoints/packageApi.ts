import { baseApi } from "@/services/httpClient/baseApi";
import { tags } from "@/utils/tagTypes";

export const packageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPackages: builder.query<any, void>({
      query: () => ({
        url: "packages",
        method: "GET",
      }),
      providesTags: [tags.PACKAGE],
    }),

    getFeaturedPackages: builder.query<any, void>({
      query: () => ({
        url: "packages/featured",
        method: "GET",
      }),
      providesTags: [tags.PACKAGE],
    }),

    getPackageById: builder.query<any, number>({
      query: (id) => ({
        url: `packages/${id}`,
        method: "GET",
      }),
      providesTags: (_, __, id) => [{ type: tags.PACKAGE, id }],
    }),
  }),
});

export const {
  useGetPackagesQuery,
  useGetFeaturedPackagesQuery,
  useGetPackageByIdQuery,
} = packageApi;
