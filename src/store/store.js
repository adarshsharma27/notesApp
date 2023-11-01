import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../features/noteSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, noteReducer);
export const store = configureStore({
  reducer: persistedReducer,
});
