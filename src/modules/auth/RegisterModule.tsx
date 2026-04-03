"use client";

import {useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {registerSchema} from "@/utils/schema/authSchema";
import {useRouter} from "next/navigation";
import {toast} from "react-hot-toast";
import {useRegisterMutation} from "@/services/endpoints/authApi";
import {Mail, EyeOff, Eye} from "lucide-react";

export default function RegisterModule() {
    const [register, {isLoading}] = useRegisterMutation();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const inputClass =
        "w-full px-3 py-2 bg-white text-black border border-gray-300 focus:ring-2 focus:ring-black/30 focus:outline-none transition placeholder:text-gray-400";

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100 text-black px-4">


            <div className="absolute inset-0 bg-white"/>

            <div className="w-full max-w-[320px] p-6 bg-white  shadow-lg z-10 border border-gray-200">

                <h1 className="text-2xl font-semibold text-center mb-6">
                    Create Account
                </h1>

                <Formik
                    initialValues={{
                        userFirstName: "",
                        userLastName: "",
                        userEmail: "",
                        userPassword: "",
                        confirmPassword: "",
                        userPhone: "",
                        userAddress: "",
                        userBvn: "",
                        referredBy: 0,
                    }}
                    validationSchema={registerSchema}
                    onSubmit={async (values, {setSubmitting}) => {
                        try {
                            const payload = {
                                userFirstName: values.userFirstName,
                                userLastName: values.userLastName,
                                userEmail: values.userEmail,
                                userPassword: values.userPassword,
                                confirmPassword: values.confirmPassword,
                                userPhone: values.userPhone,
                                userAddress: values.userAddress,
                                userBvn: values.userBvn,
                            };

                            await register(payload).unwrap();

                            toast.success("Verify your OTP");
                            router.push(`/verify-otp?email=${values.userEmail}`);
                        } catch (err: any) {
                            toast.error(
                                err?.data?.responseMessage ?? "Registration failed"
                            );
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({isSubmitting}) => (
                        <Form className="space-y-4">


                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <Field name="userFirstName" placeholder="First name" className={inputClass}/>
                                    <ErrorMessage name="userFirstName" component="p"
                                                  className="text-red-500 text-xs mt-1"/>
                                </div>

                                <div>
                                    <Field name="userLastName" placeholder="Last name" className={inputClass}/>
                                    <ErrorMessage name="userLastName" component="p"
                                                  className="text-red-500 text-xs mt-1"/>
                                </div>
                            </div>

                            <div className="relative">
                                <Field name="userEmail" placeholder="Email" className={inputClass}/>
                                <Mail className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" size={18}/>
                            </div>
                            <ErrorMessage name="userEmail" component="p" className="text-red-500 text-xs mt-1"/>

                            <Field name="userPhone" placeholder="Phone" className={inputClass}/>
                            <ErrorMessage name="userPhone" component="p" className="text-red-500 text-xs mt-1"/>

                            <Field name="userAddress" placeholder="Address" className={inputClass}/>
                            <ErrorMessage name="userAddress" component="p" className="text-red-500 text-xs mt-1"/>

                            <Field name="userBvn" placeholder="BVN" className={inputClass}/>
                            <ErrorMessage name="userBvn" component="p" className="text-red-500 text-xs mt-1"/>

                            <div className="relative">
                                <Field
                                    name="userPassword"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className={inputClass}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
                                >
                                    {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                                </button>
                            </div>
                            <ErrorMessage name="userPassword" component="p" className="text-red-500 text-xs mt-1"/>

                            <div className="relative">
                                <Field
                                    name="confirmPassword"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    className={inputClass}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
                                >
                                    {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                                </button>
                            </div>
                            <ErrorMessage name="confirmPassword" component="p" className="text-red-500 text-xs mt-1"/>

                            <button
                                type="submit"
                                disabled={isSubmitting || isLoading}
                                className="w-full py-2.5 bg-black text-white font-medium hover:bg-gray-900 transition disabled:opacity-50"
                            >
                                {isLoading ? "Creating..." : "Register"}
                            </button>

                        </Form>
                    )}
                </Formik>

                <p className="text-center text-gray-600 text-xs mt-5">
                    Already have an account?{" "}
                    <button
                        onClick={() => router.push("/login")}
                        className="text-black font-medium hover:underline"
                    >
                        Login
                    </button>
                </p>

            </div>
        </div>
    );
}
