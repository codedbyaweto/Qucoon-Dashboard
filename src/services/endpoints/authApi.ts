import { baseApi } from "@/services/httpClient/baseApi";
import { tags } from '@/utils/tagTypes';
import {
    AuthLoginRequest,
    InitiateEnrollmentRequest,
    CompleteEnrollmentRequest,
    InitiatePasswordResetRequest,
    CompletePasswordResetRequest,
    ChangePasswordRequest,
    ResendOtpRequest
} from "@/models/request/userRequest";
import {
    BaseResponse,
    LoginResponse,
} from '@/models/response/userResponses';

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, AuthLoginRequest>({
            query: (body) => ({
                url: 'authentication/login',
                method: 'POST',
                body,
            }),
            invalidatesTags: [tags.AUTH],
        }),
        register: builder.mutation<BaseResponse, InitiateEnrollmentRequest>({
            query: (body) => ({
                url: 'authentication/initiate-enrollment',
                method: 'POST',
                body,
            }),
            invalidatesTags: [tags.AUTH],
        }),
        completeEnrollment: builder.mutation<BaseResponse, CompleteEnrollmentRequest>({
            query: (body) => ({
                url: 'authentication/complete-enrollment',
                method: 'POST',
                body,
            }),
            invalidatesTags: [tags.AUTH],
        }),
        changePassword: builder.mutation<BaseResponse, ChangePasswordRequest>({
            query: (body) => ({
                url: 'authentication/change-password',
                method: 'POST',
                body,
            }),
            invalidatesTags: [tags.AUTH],
        }),
        initiatePasswordReset: builder.mutation<BaseResponse, InitiatePasswordResetRequest>({
            query: (body) => ({
                url: 'authentication/initiate-password-reset',
                method: 'POST',
                body,
            }),
            invalidatesTags: [tags.AUTH],
        }),
        completePasswordReset: builder.mutation<BaseResponse, CompletePasswordResetRequest>({
            query: (body) => ({
                url: 'authentication/complete-password-reset',
                method: 'POST',
                body,
            }),
            invalidatesTags: [tags.AUTH],
        }),
        resendOtp: builder.mutation<BaseResponse, ResendOtpRequest>({
            query: (body) => ({
                url: 'authentication/resend-otp',
                method: 'POST',
                body,
            }),
            invalidatesTags: [tags.AUTH],
        }),
        userDetails: builder.query<LoginResponse, void>({
            query: () => ({
                url: 'authentication/user-details',
                method: 'GET',
            }),
            providesTags: [tags.AUTH],
        }),
    }),
});

export const {useLoginMutation, useRegisterMutation, useCompleteEnrollmentMutation} = authApi