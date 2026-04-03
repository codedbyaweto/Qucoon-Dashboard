import { baseApi } from "@/services/httpClient/baseApi";
import { tags } from "@/utils/tagTypes";

export const portfolioApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPortfolio: builder.query<any, void>({
      query: () => ({
        url: "portfolio",
        method: "GET",
      }),
      providesTags: [tags.PORTFOLIO],
    }),
    
    createPortfolio: builder.mutation<any, { title: string }>({
      query: (body) => ({
        url: "portfolio",
        method: "POST",
        body,
      }),
      invalidatesTags: [tags.PORTFOLIO],
    }),

    getPortfolioById: builder.query<any, number>({
      query: (id) => ({
        url: `portfolio/${id}`,
        method: "GET",
      }),
      providesTags: (_, __, id) => [{ type: tags.PORTFOLIO, id }],
    }),
  }),
});

export const { useGetPortfolioQuery, useCreatePortfolioMutation, useGetPortfolioByIdQuery } = portfolioApi;
