import { Reducer } from "redux";
// import { IUserData } from "../../hooks/useUserData";
import { MeActions, MeRequestAction, MeRequestFailedAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_FAILED, ME_REQUEST_SUCCESS } from "./actions";

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export type MeReducerState = {
  loading: boolean;
  error: string;
  data: IUserData;
}

const initialState: MeReducerState = {
  loading: false,
  error: '',
  data: {
    name: '',
    iconImg: ''
  }
}

export const meReducer: Reducer<MeReducerState, MeActions> = (state = initialState, action) => {
  switch(action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    case ME_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    default:
      return state;
  }
}