import { Action, ActionCreator } from "redux";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


export const SET_TOKEN = "SET_TOKEN";
export const SET_TOKEN_SUCCESS = "SET_TOKEN_SUCCESS";
export const SET_TOKEN_FAILED = "SET_TOKEN_FAILED";

export type TokenActions = SetTokenAction | SetTokenSuccessAction | SetTokenFailedAction;
export type SetTokenAction = {
  type: typeof SET_TOKEN;
}
export type SetTokenSuccessAction = {
  type: typeof SET_TOKEN_SUCCESS;
  token: string;
}
export type SetTokenFailedAction = {
  type: typeof SET_TOKEN_FAILED;
  error: string;
}

export const setToken: ActionCreator<SetTokenAction> = () => ({
  type: SET_TOKEN,
})
export const setTokenSuccess: ActionCreator<SetTokenSuccessAction> = (token: string) => ({
  type: SET_TOKEN_SUCCESS,
  token
})
export const setTokenFailed: ActionCreator<SetTokenFailedAction> = (error: string) => ({
  type: SET_TOKEN_FAILED,
  error: error
})


export const thunkSaveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  dispatch(setToken());
  if (window.__token__) {
    dispatch(setTokenSuccess(window.__token__))
  } else {
    dispatch(setTokenFailed( 'error' ))
  }
};  