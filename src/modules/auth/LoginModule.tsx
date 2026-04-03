"use client";

import {useFormik} from "formik";
import {LoginSchema} from "@/utils/schema/authSchema";
import {useRouter} from "next/navigation";
import {toast} from "react-hot-toast";
import {useAppDispatch} from "@/store/hooks";
import {setCredentials} from "@/features/auth/authSlice";
import {useLoginMutation} from "@/services/endpoints/authApi";
import {Mail, Eye, EyeOff} from "lucide-react";
import {ErrorHandler} from "@/services/httpClient/errorHandler";
import Image from "next/image";
import {useState} from "react";
import {ImgLinks} from "@/assets/assets";
import BaseFormField from "@/components/form/BaseFormField";

type FormValues = {
    email: string;
    password: string;
}

const LoginModule = () => {
    const [login, {isLoading}] = useLoginMutation();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik<FormValues>({
        initialValues: {email: "", password: ""},
        validationSchema: LoginSchema,
        onSubmit: async (values, {setSubmitting}) => {
            try {
                const res = await login({
                    userEmail: values.email,
                    userPassword: values.password,
                }).unwrap();

                dispatch(setCredentials(res));
                router.push("/dashboard");
                toast.success("Login successful 🎉");
            } catch (err: any) {
                toast.error(
                    ErrorHandler.extractMessage(err) ?? "Invalid credentials"
                );
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4">
            <Image
                src={ImgLinks.Logo1}
                alt="Logo"
                width={120}
                height={44}
                className="mb-4"
            />

            <div className="w-full max-w-sm lg:max-w-md p-3 lg:p-4 bg-white shadow-sm">
                <h1 className="text-2xl text-center mb-2">Welcome Back</h1>

                <p className="text-[13px] text-center text-gray-600 mb-6 font-light">
                    Enter your details to access your account
                </p>

                <form onSubmit={formik.handleSubmit} className="space-y-4">

                    <BaseFormField
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email ? formik.errors.email : ""}
                        icon={<Mail size={20}/>}
                    />

                    <BaseFormField
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password ? formik.errors.password : ""}
                        icon={
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                            </button>
                        }
                    />

                    <button
                        type="submit"
                        disabled={formik.isSubmitting || isLoading}
                        className="w-full py-3 bg-black text-white font-bold"
                    >
                        {isLoading ? "Signing in..." : "Login"}
                    </button>
                </form>

                <p className="text-center text-black text-sm mt-6">
                    Don’t have an account?{" "}
                    <button
                        onClick={() => router.push("/register")}
                        className="font-medium hover:underline"
                    >
                        Register
                    </button>
                </p>
            </div>

            <p className="text-center font-extralight mt-4 text-[12px]">
                By clicking continue you agree with our
                <a href="#" className="underline"> Terms of Service and Privacy Policy</a>
            </p>
        </div>
    );
};

export default LoginModule;