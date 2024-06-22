import { configureStore } from "@reduxjs/toolkit";
import dataslice from "./slices/dataslice";

const store = configureStore({ reducer: { data: dataslice } });

export default store;
