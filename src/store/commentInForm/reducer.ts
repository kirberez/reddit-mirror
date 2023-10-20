import { Reducer } from "redux";
import { CommentInFormActions, UpdateCommentInFormAction, UPDATE_COMMENT_IN_FORM, UPDATE_COMMENT_IN_FORM_FAILED, UPDATE_COMMENT_IN_FORM_SUCCESS } from "./actions";


export interface CommentInFormReducerState {
  commentText: string;
  loading: boolean;
  error: string;
  touched: boolean;
}

const initialCommentInFormState: CommentInFormReducerState = {
  commentText: '',
  loading: false,
  error: '',
  touched: false,
}

export const commentInFormReducer: Reducer<CommentInFormReducerState, CommentInFormActions> = (state = initialCommentInFormState, action: CommentInFormActions) => {
  switch (action.type) {
    case UPDATE_COMMENT_IN_FORM:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_COMMENT_IN_FORM_SUCCESS:
      return {
        ...state,
        commentText: action.commentText,
        error: '',
        loading: false,
        touched: true,
      }
    case UPDATE_COMMENT_IN_FORM_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
        touched: true,
      }
    default: 
      return state;
  }
}