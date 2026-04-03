// "use client";
//
// import { useState, type SubmitEvent } from "react";
// // import { useChangePasswordMutation} from "@/services/endpoints/authApi";
// import { toast } from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
//
// export default function ResetPasswordPage() {
//     const [oldPassword, setOldPassword] = useState("");
//     const [newPassword, setNewPassword] = useState("");
//     // const [changePassword, { isLoading }] = useChangePasswordMutation();
//     const router = useRouter();
//
//     const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             const res = await changePassword({ oldPassword, newPassword }).unwrap();
//             toast.success(res.responseMessage);
//             router.push("/login");
//         } catch (err: any) {
//             toast.error(err?.data?.responseMessage || "Failed to change password");
//         }
//     };
//
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-teal-200 px-4">
//             <motion.form
//                 onSubmit={handleSubmit}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="w-full max-w-md bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl space-y-5"
//             >
//                 <h1 className="text-2xl font-bold text-center">Reset Password 🔐</h1>
//
//                 <input
//                     type="password"
//                     placeholder="Old Password"
//                     value={oldPassword}
//                     onChange={(e) => setOldPassword(e.target.value)}
//                     className="input"
//                     required
//                 />
//
//                 <input
//                     type="password"
//                     placeholder="New Password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     className="input"
//                     required
//                 />
//
//                 <motion.button
//                     whileTap={{ scale: 0.97 }}
//                     whileHover={{ scale: 1.02 }}
//                     type="submit"
//                     disabled={isLoading}
//                     className="btn bg-green-600 hover:bg-green-700"
//                 >
//                     {isLoading ? "Updating..." : "Reset Password"}
//                 </motion.button>
//             </motion.form>
//         </div>
//     );
// }