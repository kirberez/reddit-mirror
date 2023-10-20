import { ThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Action, ActionCreator } from "redux";
import { RootState } from "../store";
import { IUserData } from "./reducer";
import type {} from 'redux-thunk/extend-redux';


export const ME_REQUEST = 'ME_REQUEST';
export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
export const ME_REQUEST_FAILED = 'ME_REQUEST_FAILED';

export type MeActions = MeRequestAction | MeRequestSuccessAction | MeRequestFailedAction;
export type MeRequestAction = {
  type: typeof ME_REQUEST;
};
export type MeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS;
  data: IUserData;
};
export type MeRequestFailedAction = {
  type: typeof ME_REQUEST_FAILED;
  error: string;
};

export const meRequest: ActionCreator<MeRequestAction> = () => ({
  type: ME_REQUEST,
})
export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
  type: ME_REQUEST_SUCCESS,
  data
})
export const meRequestFailed: ActionCreator<MeRequestFailedAction> = (error: string) => ({
  type: ME_REQUEST_FAILED,
  error
})

// Фанк, к-рый выполнит код и будет диспатчить экшены
export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(meRequest())
  axios.get('https://oauth.reddit.com/api/v1/me.json' , {
    headers: { Authorization: `bearer ${getState().tokenReducer.token}` },
  }) 
  .then((resp) => {
    const userData = resp.data;
    dispatch(meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }))
  }) 
  .catch((error) => {
    dispatch(meRequestFailed( String(error) ))
  }); 
} 