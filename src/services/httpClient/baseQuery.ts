// import { ROUTES } from "@/constants/routes";
import { RootState } from "@/store/store";
import { logout } from "@/features/auth/authSlice";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import {useRouter} from "next/navigation";
export const baseQuery = fetchBaseQuery({
    baseUrl: `https://69dq5knwcg.execute-api.us-east-1.amazonaws.com/api/dev/`,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.user?.token;
        if (token) {
            headers.set("Authorization", token);
        }
        return headers;
    },
});

type ExtendedQueryArgs =
    | string
    | {
    url: string;
    method?: string;
    body?: unknown;
    params?: Record<string, any>;
    headers?: Record<string, string>;
    expectedResponseCodes?: string[];
};

export const kotlinBaseQueryWithResponseCodeHandling = async (
    args: ExtendedQueryArgs,
    api: Parameters<typeof baseQuery>[1],
    extraOptions: Parameters<typeof baseQuery>[2]
) => {
    const rawResult = await baseQuery(args, api, extraOptions);

    // Check for token expiration in both success and error responses
    const result = rawResult.data as any;
    const errorData = rawResult.error?.data as any;
    const responseCode = String(result?.responseCode || errorData?.responseCode);

    /**
     * 🚨 JWT / SESSION EXPIRED
     * responseCode === "90"
     * Check this BEFORE handling other errors
     */
    if (responseCode === "90") {
        api.dispatch(logout());
        // router.replace(ROUTES.AUTH.login);

        return {
            error: {
                status: "SESSION_EXPIRED",
                data: {
                    message: "Session expired. Please log in again.",
                    original: result || errorData,
                },
            },
        };
    }

    // Network / fetch error (but not token expiration)
    if (rawResult.error) {
        return rawResult;
    }

    const expectedCodes =
        (typeof args === "object" && args.expectedResponseCodes) || ["00"];

    /**
     * ✅ SUCCESS
     */
    if (expectedCodes.includes(responseCode)) {
        return {
            data: result,
        };
    }

    /**
     * ❌ API ERROR
     */
    let errorMessage = "An unknown error occurred";

    if (typeof result.responseMessage === "string") {
        errorMessage = result.responseMessage;
    } else if (
        typeof result.responseMessage === "object" &&
        result.responseMessage !== null
    ) {
        errorMessage = Object.entries(result.responseMessage)
            .map(([key, value]) => `${key}: ${value}`)
            .join(", ");
    }

    return {
        error: {
            status: responseCode,
            data: {
                message: errorMessage,
                original: result,
            },
        },
    };
};

