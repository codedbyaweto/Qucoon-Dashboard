import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
// import packageReducer from "@/features/package/packageSlice";
// import portfolioReducer from "@/features/portfolio/portfolioSlice";
import { baseApi } from "@/services/httpClient/baseApi";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        // package: packageReducer,
        // portfolio: portfolioReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

