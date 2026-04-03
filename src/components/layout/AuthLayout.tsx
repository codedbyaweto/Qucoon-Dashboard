"use client";

import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center bg-white text-black overflow-hidden px-4">

            {/* <span className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-40 top-[-10%] left-[-10%]"></span> */}
            {/* <span className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 top-[20%] right-[-10%]"></span> */}
            {/* <span className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-[10%] left-[20%]"></span> */}

            <div className="w-full max-w-sm relative z-10">
                {children}
            </div>

        </div>
    );
};

export default AuthLayout;