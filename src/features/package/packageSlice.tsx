// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { Package } from "@/models/package/package";
//
// type PackageState = {
//     packages: Package[];
//     featuredPackages: Package[];
//     selectedPackage: Package | null;
// };
//
// const initialState: PackageState = {
//     packages: [],
//     featuredPackages: [],
//     selectedPackage: null,
// };
//
// const packageSlice = createSlice({
//     name: "package",
//     initialState,
//     reducers: {
//         setPackages: (state, action: PayloadAction<Package[]>) => {
//             state.packages = action.payload;
//         },
//
//         setFeaturedPackages: (state, action: PayloadAction<Package[]>) => {
//             state.featuredPackages = action.payload;
//         },
//
//         selectPackage: (state, action: PayloadAction<Package>) => {
//             state.selectedPackage = action.payload;
//         },
//
//         clearSelectedPackage: (state) => {
//             state.selectedPackage = null;
//         },
//     },
// });
//
// export const { setPackages, setFeaturedPackages, selectPackage, clearSelectedPackage } = packageSlice.actions;
//
// export default packageSlice.reducer;