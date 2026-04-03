// "use client";
//
// import { useState } from "react";
// import { useSendOtpMutation } from "@/services/endpoints/authApi";
// import { toast } from "react-hot-toast";
// import { motion } from "framer-motion";
//
// export default function VerifyEmailPage() {
//     const [email, setEmail] = useState("");
//     const [sendOtp, { isLoading }] = useSendOtpMutation();
//
//     const handleSubmit = async (e: any) => {
//         e.preventDefault();
//         try {
//             const res = await sendOtp({ email }).unwrap();
//             toast.success(res.responseMessage);
//         } catch (err: any) {
//             toast.error(err?.data?.responseMessage || "Failed to send OTP");
//         }
//     };
//
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200 px-4">
//             <motion.form
//                 onSubmit={handleSubmit}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="w-full max-w-md bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl space-y-5"
//             >
//                 <h1 className="text-2xl font-bold text-center">Verify Email 📧</h1>
//
//                 <input
//                     type="email"
//                     placeholder="Email Address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="input"
//                     required
//                 />
//
//                 <motion.button
//                     whileTap={{ scale: 0.97 }}
//                     whileHover={{ scale: 1.02 }}
//                     disabled={isLoading}
//                     className="btn bg-indigo-600 hover:bg-indigo-700"
//                 >
//                     {isLoading ? "Sending..." : "Send OTP"}
//                 </motion.button>
//             </motion.form>
//         </div>
//     );
// }