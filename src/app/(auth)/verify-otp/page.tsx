import {Suspense} from "react";
import VerifyOtpClient from "@/modules/auth/VerifyOtpClient";
import AuthLayout from "@/components/layout/AuthLayout";


export default function VerifyOtpPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AuthLayout>
                <VerifyOtpClient/>
            </AuthLayout>
        </Suspense>
    );
}
