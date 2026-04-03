import DashBoardLayout from "@/components/layout/DashboardLayout";
import {ReactNode} from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return <DashBoardLayout>{children}</DashBoardLayout>;
}

export default Layout;