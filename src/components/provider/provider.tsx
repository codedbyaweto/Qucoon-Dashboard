"use client";

import { Provider } from "react-redux";
import { store } from "../../store/store";
import * as React from "react";
import NiceModal from "@ebay/nice-modal-react";
import {Toaster} from "react-hot-toast";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <NiceModal.Provider>
                <Toaster />
                {children}
            </NiceModal.Provider>
        </Provider>
        )
}