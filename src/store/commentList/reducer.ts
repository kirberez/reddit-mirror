import { Reducer } from "redux";
import { ICommentProps } from "../../hooks/usePostCommentsData";
import { commentListActions, UPDATE_COMMENT_LIST, UPDATE_COMMENT_LIST_FAILED, UPDATE_COMMENT_LIST_SUCCESS } from "./actions";

export interface commentListReducerState {
  comments: ICommentProps [];
  loading: boolean;
  error: string;
}


export const initialCommentListReducerState: commentListReducerState = {
  comments: [
    {
      author: 'any author',
      body: '',  
      created_utc: 0,
      id: '',
      parent_id: '',
      replies: null, 
      subreddit: '',
      subreddit_id: '',
    }
  ],
  loading: false,
  error: ''
};

export const commentListReducer: Reducer<commentListReducerState, commentListActions> = (state = initialCommentListReducerState, action: commentListActions) => {
  switch (action.type) {
    case UPDATE_COMMENT_LIST:
      return {
        ...state,
        loading: true
      }
    case UPDATE_COMMENT_LIST_SUCCESS:
      return {
        ...state,
        comments: action.commentList,
        loading: false
      }
    case UPDATE_COMMENT_LIST_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    default:
      return state;
  }
};
