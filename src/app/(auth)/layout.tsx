"use client";

import AuthLayout from "@/components/layout/AuthLayout";
import { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
    return <AuthLayout>{children}</AuthLayout>;
}