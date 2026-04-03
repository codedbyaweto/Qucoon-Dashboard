"use client";

import {useState} from "react";
import {useFormik} from "formik";
import {registerSchema} from "@/utils/schema/authSchema";
import {useRouter} from "next/navigation";
import {toast} from "react-hot-toast";
import {useRegisterMutation} from "@/services/endpoints/authApi";
import {Mail, EyeOff, Eye} from "lucide-react";
import BaseFormField from "@/components/form/BaseFormField";

type RegisterFormValues = {
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    userPassword: string;
    confirmPassword: string;
    userPhone: string;
    userAddress: string;
    userBvn: string;
    referredBy: number;
};

export default function RegisterModule() {
    const [register, {isLoading}] = useRegisterMutation();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik<RegisterFormValues>({
        initialValues: {
            userFirstName: "",
            userLastName: "",
            userEmail: "",
            userPassword: "",
            confirmPassword: "",
            userPhone: "",
            userAddress: "",
            userBvn: "",
            referredBy: 0,
        },
        validationSchema: registerSchema,
        onSubmit: async (values, {setSubmitting}) => {
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
                toast.error(err?.data?.responseMessage ?? "Registration failed");
            } finally {
                setSubmitting(false);
            }
        },
    });
    const getError = (name: keyof RegisterFormValues) =>
        formik.touched[name] ? formik.errors[name] : undefined;

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100 text-black px-4">

            <div className="absolute inset-0 bg-white"/>

            <div className="w-full max-w-[320px] p-6 bg-white shadow-sm z-10 border border-gray-100">
                <h1 className="text-2xl font-semibold text-center mb-6">
                    Create Account
                </h1>

                <form onSubmit={formik.handleSubmit} className="space-y-4">

                    <div className="grid grid-cols-2 gap-2">
                        <BaseFormField
                            name="userFirstName"
                            placeholder="First name"
                            value={formik.values.userFirstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={getError("userFirstName")}
                        />

                        <BaseFormField
                            name="userLastName"
                            placeholder="Last name"
                            value={formik.values.userLastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={getError("userLastName")}
                        />
                    </div>

                    <BaseFormField
                        name="userEmail"
                        placeholder="Email"
                        value={formik.values.userEmail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={getError("userEmail")}
                        icon={<Mail size={18}/>}
                    />

                    <BaseFormField
                        name="userPhone"
                        placeholder="Phone"
                        value={formik.values.userPhone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={getError("userPhone")}
                    />

                    <BaseFormField
                        name="userAddress"
                        placeholder="Address"
                        value={formik.values.userAddress}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={getError("userAddress")}
                    />

                    <BaseFormField
                        name="userBvn"
                        placeholder="BVN"
                        value={formik.values.userBvn}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={getError("userBvn")}
                    />

                    <BaseFormField
                        name="userPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={formik.values.userPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={getError("userPassword")}
                        icon={
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                            </button>
                        }
                    />

                    <BaseFormField
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={getError("confirmPassword")}
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
                        className="w-full py-2.5 bg-black text-white font-medium hover:bg-gray-900 transition disabled:opacity-50"
                    >
                        {isLoading ? "Creating..." : "Register"}
                    </button>

                </form>

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