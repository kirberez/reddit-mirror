import { ThunkAction } from "@reduxjs/toolkit";
import { ActionCreator } from "redux";
import { RootState } from "../store";


export const UPDATE_COMMENT_IN_FORM = 'UPDATE_COMMENT_IN_FORM';
export const UPDATE_COMMENT_IN_FORM_SUCCESS = 'UPDATE_COMMENT_IN_FORM_SUCCESS';
export const UPDATE_COMMENT_IN_FORM_FAILED = 'UPDATE_COMMENT_IN_FORM_FAILED';

export type CommentInFormActions = UpdateCommentInFormAction | UpdateCommentInFormSuccessAction | UpdateCommentInFormFailedAction 
export type UpdateCommentInFormAction = {
  type: typeof UPDATE_COMMENT_IN_FORM;
}
export type UpdateCommentInFormSuccessAction = {
  type: typeof UPDATE_COMMENT_IN_FORM_SUCCESS;
  commentText: string;
}
export type UpdateCommentInFormFailedAction = {
  type: typeof UPDATE_COMMENT_IN_FORM_FAILED;
  error: string;
}

export const updateCommentInForm: ActionCreator<UpdateCommentInFormAction> = () => ({
  type: UPDATE_COMMENT_IN_FORM,
}) 
export const updateCommentInFormSuccess: ActionCreator<UpdateCommentInFormSuccessAction> = (commentText: string) => ({
  type: UPDATE_COMMENT_IN_FORM_SUCCESS,
  commentText
}) 
export const updateCommentInFormFailed: ActionCreator<UpdateCommentInFormFailedAction> = (error: string) => ({
  type: UPDATE_COMMENT_IN_FORM_FAILED,
  error
});

// export const updateCommentInFormAsync = (): ThunkAction<void, RootState, unknown, CommentInFormActions> => (dispatch, getState) => {
//   dispatch(updateCommentInForm());

// }