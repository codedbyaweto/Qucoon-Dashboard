"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useCompleteEnrollmentMutation } from "@/services/endpoints/authApi";
import { Lock } from "lucide-react";

const VerifyOtpClient = () => {
    const [otp, setOtp] = useState("");
    const [completeEnrollment, { isLoading }] = useCompleteEnrollmentMutation();
    const router = useRouter();
    const searchParams = useSearchParams();

    const email = searchParams.get("email");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!email) {
            toast.error("Email is missing");
            return;
        }

        if (!otp || otp.length !== 6) {
            toast.error("OTP must be 6 digits");
            return;
        }

        try {
            const res = await completeEnrollment({
                userEmail: email,
                otp,
            }).unwrap();

            toast.success(res.responseMessage ?? "Verified successfully");
            router.push("/login");
        } catch (err: any) {
            toast.error(err?.data?.responseMessage ?? "Invalid OTP");
        }
    };

    if (!email) return null;

    return (
        <div className="min-h-screen flex items-center justify-center bg-white text-black px-4">
            <div className="w-full max-w-lg lg:max-w-xl p-6 lg:p-10 bg-white shadow-lg">

                <h2 className="text-xl text-center mb-6">
                    Verify your account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            maxLength={6}
                            onChange={(e) =>
                                setOtp(e.target.value.replace(/\D/g, ""))
                            }
                            className="w-full px-3 py-2 text-center tracking-widest rounded-xl bg-white text-black border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none transition"
                        />

                        <Lock
                            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
                            size={20}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-black text-white font-bold"
                    >
                        {isLoading ? "Verifying..." : "Verify OTP"}
                    </button>

                </form>

            </div>
        </div>
    );
};

export default VerifyOtpClient;
