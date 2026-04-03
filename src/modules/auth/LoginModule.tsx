"use client";

import {Formik, Form, Field, ErrorMessage} from "formik";
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
import {ImgLinks} from "@/assets/assets"

const LoginModule = () => {
    const [login, {isLoading}] = useLoginMutation();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

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
                <h1 className="text-2xl text-center mb-2">
                    Welcome Back
                </h1>

                <p className="text-[13px]  text-center text-gray-600 mb-6 font-light">
                    Enter your details to access your account
                </p>

                <Formik
                    initialValues={{email: "", password: ""}}
                    validationSchema={LoginSchema}
                    onSubmit={async (values, {setSubmitting}) => {
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
                    }}
                >
                    {({isSubmitting}) => (
                        <Form className="space-y-4">

                            <div className="w-full">

                                <div className="relative">
                                    <Field
                                        name="email"
                                        placeholder="Email"
                                        className="w-full pl-3 pr-10 py-2 bg-white text-black border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
                                    />

                                    <Mail
                                        className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
                                        size={20}/>
                                </div>

                                <ErrorMessage
                                    name="email"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div className="w-full">
                                <div className="relative">
                                    <Field
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="w-full pl-3 pr-10 py-2 bg-white text-black border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none transition"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
                                    >
                                        {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                                    </button>

                                </div>

                                <ErrorMessage
                                    name="password"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || isLoading}
                                className="w-full py-3 bg-black text-white font-bold"
                            >
                                {isLoading ? "Signing in..." : "Login"}
                            </button>
                        </Form>
                    )}
                </Formik>

                <p className="text-center text-black text-sm mt-6">
                    Don’t have an account?{" "}
                    <button
                        onClick={() => router.push("/register")}
                        className="text-black font-medium hover:underline"
                    >
                        Register
                    </button>
                </p>
            </div>
            <p className="text-center font-extralight mt-4 text-[12px]">By clicking continue you agree with our
                <a href="#" className="underline"> Terms of Service and Privacy Policy</a>
            </p>
        </div>
    );
};

export default LoginModule;
