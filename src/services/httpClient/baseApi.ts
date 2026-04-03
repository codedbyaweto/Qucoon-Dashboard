import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tags } from "@/utils/tagTypes";
import { get } from "http";
import { RootState } from "@/store/store";
import { kotlinBaseQueryWithResponseCodeHandling } from "./baseQuery";


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: kotlinBaseQueryWithResponseCodeHandling,
  tagTypes: Object.values(tags),
  endpoints: () => ({}),
});


