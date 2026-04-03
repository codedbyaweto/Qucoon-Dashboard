import DashboardModule from "@/modules/Dashboard/DashboardModule";
import DashBoardLayout from "@/components/layout/DashboardLayout";



export default function DashboardPage() {
    return (
        <DashBoardLayout>
            <DashboardModule />
        </DashBoardLayout>
    )
}