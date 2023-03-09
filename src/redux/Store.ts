
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AnyAction, combineReducers } from "redux";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { reducer } from "./Reducer";

// import { dataReducer } from "./slice";

const rootReducer = combineReducers({
  data: reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(thunkMiddleware),
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
export const useTypedDispatch = () =>
  useDispatch<TypedDispatch<AppRootStateType>>();

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
  useSelector;

// @ts-ignore
window.store = store;
