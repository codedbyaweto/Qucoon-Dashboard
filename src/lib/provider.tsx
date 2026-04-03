"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import * as React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}