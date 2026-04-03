import Providers from "@/lib/provider";
import {ModalProvider} from "@/lib/ModalProvider";
import {PageTransition} from "@/components/ui/PageTransition";
import {ReactNode} from "react";
import "./globals.css"
import { Toaster } from "react-hot-toast";

export default function RootLayout({children,}: { children: ReactNode}) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <Toaster />
            <ModalProvider>
                {children}
                {/*<PageTransition>{children}</PageTransition>*/}
            </ModalProvider>
        </Providers>
        </body>
        </html>
    );
}