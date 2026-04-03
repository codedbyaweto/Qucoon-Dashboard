"use client";

import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Formik, Form, Field } from "formik";
import { useCreatePortfolioMutation } from "@/services/endpoints/portfolioApi";
import toast from "react-hot-toast";

export const CreatePortfolioModal = NiceModal.create(() => {
    const modal = useModal();
    const [createPortfolio, { isLoading }] = useCreatePortfolioMutation();

    if (!modal.visible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => modal.hide()}
            />

            {/* Modal */}
            <div className="relative w-[420px] bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-gray-200 animate-fadeIn">
                <h2 className="text-xl font-semibold mb-5 text-gray-800">
                    Create Portfolio
                </h2>

                <Formik
                    initialValues={{ title: "" }}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            const res = await createPortfolio({
                                title: values.title,
                            }).unwrap();

                            toast.success(
                                res.responseMessage || "Portfolio created successfully!"
                            );

                            await modal.hide();
                        } catch {
                            toast.error("Failed to create portfolio");
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">
                            <Field
                                name="title"
                                placeholder="Portfolio Title"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/40 transition"
                            />

                            <div className="flex justify-end gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => modal.hide()}
                                    className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || isLoading}
                                    className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        "Create"
                                    )}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
});