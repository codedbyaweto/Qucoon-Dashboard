"use client";

import { useGetPackagesQuery } from "@/services/endpoints/packageApi";
import NiceModal from "@ebay/nice-modal-react";
import { CreatePortfolioModal } from "@/modals/modal";


export default function DashboardModule() {
    const { data, isLoading } = useGetPackagesQuery();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                Loading...
            </div>
        );
    }

    const packages = data?.data ?? [];

    return (
        <div className="min-h-screen bg-white text-black px-4 py-6">
            <div className="max-w-4xl mx-auto flex justify-between items-center mb-4">
                <h1 className="text-2xl font-medium">Dashboard</h1>

                <button
                    onClick={() => NiceModal.show(CreatePortfolioModal)}
                    className="px-4 py-2 bg-black text-white  hover:opacity-80 transition"
                >
                    Create Portfolio
                </button>
            </div>

            <div className="max-w-4xl mx-auto">
                <p className="text-gray-500 text-sm">No packages available.</p>
            </div>

            {/*<div className="max-w-4xl mx-auto">*/}
            {/*    {packages.length === 0 ? (*/}
            {/*        <p className="text-gray-500 text-sm">No packages available.</p>*/}
            {/*    ) : (*/}
            {/*        <div className="grid gap-4 md:grid-cols-2">*/}
            {/*            {packages.map((pkg) => (*/}
            {/*                <div*/}
            {/*                    key={pkg.packageId}*/}
            {/*                    className="rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition"*/}
            {/*                >*/}
            {/*                    <h3 className="text-lg font-medium mb-1">*/}
            {/*                        {pkg.packageName}*/}
            {/*                    </h3>*/}

            {/*                    <p className="text-gray-500 text-sm">*/}
            {/*                        ROI: {pkg.packageROI}%*/}
            {/*                    </p>*/}

            {/*                    <p className="mt-2 text-black font-semibold">*/}
            {/*                        ₦{pkg.packageUnitPrice}*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>
    );
}