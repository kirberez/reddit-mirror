import { ThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ActionCreator } from "redux";
import { ICommentProps } from "../../hooks/usePostCommentsData";
import { RootState } from "../store";

export const UPDATE_COMMENT_LIST = "UPDATE_COMMENT_LIST";
export const UPDATE_COMMENT_LIST_SUCCESS = "UPDATE_COMMENT_LIST_SUCCESS";
export const UPDATE_COMMENT_LIST_FAILED = "UPDATE_COMMENT_LIST_FAILED";

export type commentListActions =
  | udpateCommentListAction
  | udpateCommentListSuccessAction
  | udpateCommentListFailedAction;
export type udpateCommentListAction = {
  type: typeof UPDATE_COMMENT_LIST;
};
export type udpateCommentListSuccessAction = {
  type: typeof UPDATE_COMMENT_LIST_SUCCESS;
  commentList: ICommentProps[];
};
export type udpateCommentListFailedAction = {
  type: typeof UPDATE_COMMENT_LIST_FAILED;
  error: string;
};

export const updateCommentList: ActionCreator<
  udpateCommentListAction
> = () => ({
  type: UPDATE_COMMENT_LIST,
});
export const updateCommentListSuccess: ActionCreator<
  udpateCommentListSuccessAction
> = (commentList: ICommentProps[]) => ({
  type: UPDATE_COMMENT_LIST_SUCCESS,
  commentList,
});
export const updateCommentListFailed: ActionCreator<
  udpateCommentListFailedAction
> = (error: string) => ({
  type: UPDATE_COMMENT_LIST_FAILED,
  error,
});

export const updateCommentListAsync =
  (postId: string): ThunkAction<void, RootState, unknown, commentListActions> =>
  (dispatch, getState) => {
    dispatch(updateCommentList());
    axios
      .get(`https://oauth.reddit.com/comments/${postId}`, {
        headers: { Authorization: `bearer ${getState().tokenReducer.token}` },
      })
      .then((resp) => {
        const commentsList = resp.data[1].data.children; // В resp.data[0].data.children сам пост с другой структурой( Вместо боди - селфтекст)
        console.log("comments base: ", resp.data);
        const editedCommentsList: ICommentProps[] = commentsList.map(
          (comment: { data: ICommentProps }) => {
            return {
              author: comment.data.author,
              body: comment.data.body,
              created_utc: comment.data.created_utc,
              id: comment.data.id,
              parent_id: comment.data.parent_id,
              replies: comment.data.replies,
              subreddit: comment.data.subreddit,
              subreddit_id: comment.data.subreddit_id,
            };
          }
        );
        dispatch(updateCommentListSuccess(editedCommentsList));
        console.log("editedCommentsList: ", editedCommentsList);
      })
      .catch((error) => {
        dispatch(updateCommentListFailed(String(error)));
      });
  };
