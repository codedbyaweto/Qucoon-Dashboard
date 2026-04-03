import Providers from "@/components/provider/provider";
import {ReactNode} from "react";
import "./globals.css"


export default function RootLayout({children,}: { children: ReactNode }) {
    return (
        <Providers>
            <html lang="en">
            <body>
                {children}
            </body>
            </html>
        </Providers>
    )
}