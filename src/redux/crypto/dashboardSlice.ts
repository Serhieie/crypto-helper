import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { initialState } from "./initialState";
import { createSelector } from "reselect";
import type { CommonAsset, Cryptocurrency } from "./Cryptocurency.types";
import type { CryptoState } from "./initialState";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setIsModalOpen(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
    setIsDeleteModalOpen(state, action: PayloadAction<boolean>) {
      state.isDeleteModalOpen = action.payload;
    },
    setShowPassword(state) {
      state.showPassword = !state.showPassword;
    },
    setIsCoinsShowed(state, action: PayloadAction<boolean>) {
      state.isCoinShowed = action.payload;
    },
    setIsDrawerOpen(state, action: PayloadAction<boolean>) {
      state.isDrawerOpen = action.payload;
    },
    setCoinForUpdate(state, action: PayloadAction<Cryptocurrency>) {
      state.coinForUpdate = action.payload;
    },
    setCoin(state, action: PayloadAction<Cryptocurrency>) {
      state.coin = action.payload;
    },
    setIsChartLineOpen(state, action: PayloadAction<boolean>) {
      state.isChartLineOpen = action.payload;
    },
    setIsChartPieOpen(state, action: PayloadAction<boolean>) {
      state.isChartPieOpen = action.payload;
    },
    setIsTableOpen(state, action: PayloadAction<boolean>) {
      state.isTableOpen = action.payload;
    },
    changeAssets(state, action: PayloadAction<CommonAsset[]>) {
      state.assets = [...action.payload];
    },
    removeAsset(state, action: PayloadAction<string>) {
      state.assets = state.assets.filter((asset) => asset.assetId !== action.payload);
    },
    setAssetToShow(state, action: PayloadAction<string | null>) {
      state.assetToShowId = action.payload;
    },
    changeFilterValue(state, action: PayloadAction<string>) {
      state.filterValue = action.payload;
    },
  },
});

const persistConfig = {
  key: "dashboard",
  storage,
};

export const persistedDashboardReducer = persistReducer(
  persistConfig,
  dashboardSlice.reducer
);

export const getDashboardState = (state: { dashboard: CryptoState }) => state.dashboard;

export const getAssets = createSelector(
  getDashboardState,
  (dashboard) => dashboard.assets
);

export const {
  setIsLoading,
  changeAssets,
  setIsModalOpen,
  removeAsset,
  setIsCoinsShowed,
  setIsDrawerOpen,
  changeFilterValue,
  setCoinForUpdate,
  setAssetToShow,
  setIsChartLineOpen,
  setIsChartPieOpen,
  setIsTableOpen,
  setIsDeleteModalOpen,
  setShowPassword,
  setCoin,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
