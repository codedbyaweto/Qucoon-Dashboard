// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { PortfolioData } from "@/models/portfolio/portfolio";
//
// type PortfolioState = {
//     data: PortfolioData | null;
// };
//
// const initialState: PortfolioState = {
//     data: null,
// };
//
// const portfolioSlice = createSlice({
//     name: "portfolio",
//     initialState,
//     reducers: {
//         setPortfolio: (state, action: PayloadAction<PortfolioData>) => {
//             state.data = action.payload;
//         },
//         clearPortfolio: (state) => {
//             state.data = null;
//         },
//     },
// });
//
// export const { setPortfolio, clearPortfolio } = portfolioSlice.actions;
// export default portfolioSlice.reducer;