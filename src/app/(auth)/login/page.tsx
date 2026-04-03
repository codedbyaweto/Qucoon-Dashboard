import LoginModule from "@/modules/auth/LoginModule";
import AuthLayout from "@/components/layout/AuthLayout";

const LoginPage = () => {
    return (
        <AuthLayout>
            <LoginModule />
        </AuthLayout>
    )
}


export default LoginPage;