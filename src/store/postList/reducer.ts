import { Reducer } from "redux";
import { IPostData } from "../../hooks/usePostsData";
import { postListActions, UPDATE_POST_LIST, UPDATE_POST_LIST_FAILED, UPDATE_POST_LIST_SUCCESS } from "./actions";


export interface postListReducerState {
  posts: IPostData [];
  loading: boolean;
  afterPoint: string;
  error: string; // === errorLoading
}

const initialPostListReducerState: postListReducerState = {
  posts: [
    {
      id: '12',
      url: '',
      title: '',
      selftext: '',
      created_utc: 0,
      thumbnail: '', // с API не приходит
      url_overridden_by_dest: '', // с API не приходит
      img: '',
      author: '',
    }
  ],
  loading: false,
  afterPoint: '',
  error: '',
}


export const postListReducer: Reducer<postListReducerState, postListActions> = (state = initialPostListReducerState, action: postListActions) => {
  switch (action.type) {
    case UPDATE_POST_LIST:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_POST_LIST_SUCCESS:
      return {
        ...state,
        posts: action.postList,
        afterPoint: action.afterPoint,
        loading: false,
      }
    case UPDATE_POST_LIST_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    default: 
      return state
  }
}
