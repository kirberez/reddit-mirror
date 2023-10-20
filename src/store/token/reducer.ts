
import { Reducer } from "@reduxjs/toolkit";
import { TokenActions, SET_TOKEN, SET_TOKEN_SUCCESS, SET_TOKEN_FAILED } from "./actions";


export interface tokenReducerState {
  loading: boolean;
  error: string;
  token: string;
}

const initialTokenState: tokenReducerState = {
  loading: false,
  error: '',
  token: '',
}

export const tokenReducer: Reducer<tokenReducerState, TokenActions> = (state = initialTokenState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        loading: true,
      }
    case SET_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
      }
    case SET_TOKEN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default: 
      return state;
  }
}