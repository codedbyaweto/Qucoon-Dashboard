"use client";

import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { ProtectedRoute } from "../provider/protected-route";

const DashBoardLayout = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/login");
  };

  return (
      <ProtectedRoute>
        <div className="flex w-full min-h-screen flex bg-black text-black">

          <aside className="hidden md:flex w-56 border-r border-gray-200 p-6 flex-col">
            <img
                src="/images/qucoon2.svg"
                alt="Logo"
                className="h-32 w-auto"
            />

            <button
                onClick={handleLogout}
                className="mt-auto w-full py-2 bg-red-800 text-white rounded-xl hover:opacity-80 transition"
            >
              Logout
            </button>
          </aside>

          <main className="flex-1 p-0.3">
            {children}
          </main>

        </div>
      </ProtectedRoute>
  );
};

export default DashBoardLayout;