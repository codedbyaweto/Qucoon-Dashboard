import RegisterModule from "@/modules/auth/RegisterModule";
import AuthLayout from "@/components/layout/AuthLayout";


export default function RegisterPage() {
    return (
        <AuthLayout>
            <RegisterModule />
        </AuthLayout>
    )
}