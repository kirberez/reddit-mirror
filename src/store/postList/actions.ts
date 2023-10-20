import { ThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ActionCreator } from "redux";
import { IPostData } from "../../hooks/usePostsData";
import { RootState } from "../store";

export const UPDATE_POST_LIST = "UPDATE_POST_LIST";
export const UPDATE_POST_LIST_SUCCESS = "UPDATE_POST_LIST_SUCCESS";
export const UPDATE_POST_LIST_FAILED = "UPDATE_POST_LIST_FAILED";

export type postListActions =
  | updatePostListAction
  | updatePostListSuccessAction
  | updatePostListFailedAction;
export type updatePostListAction = {
  type: typeof UPDATE_POST_LIST;
};
export type updatePostListSuccessAction = {
  type: typeof UPDATE_POST_LIST_SUCCESS;
  postList: IPostData[];
  afterPoint: string;
};
export type updatePostListFailedAction = {
  type: typeof UPDATE_POST_LIST_FAILED;
  error: string;
};

export const updatePostList: ActionCreator<updatePostListAction> = () => ({
  type: UPDATE_POST_LIST,
});
export const updatePostListSuccess: ActionCreator<
  updatePostListSuccessAction
> = (postList: IPostData[], afterPoint: string) => ({
  type: UPDATE_POST_LIST_SUCCESS,
  postList,
  afterPoint,
});
// error = errorLoading
export const updatePostListFailed: ActionCreator<updatePostListFailedAction> = (
  error: string
) => ({
  type: UPDATE_POST_LIST_FAILED,
  error,
});

// // VARIANT 1
// export const updatePostListAsync = (): ThunkAction<void, RootState, unknown, postListActions> => (dispatch, getState) => {
//   dispatch(updatePostList());
//   axios.get('https://oauth.reddit.com/best', {
//     headers: { Authorization: `bearer ${getState().tokenReducer.token}` },
//     params: {
//       limit: 5,
//       after: getState().postListReducer.afterPoint,
//     }
//   })
//     .then((resp) => {
//       const postList: {data: IPostData}[] = resp.data.data.children;
//       const editedList: IPostData[] = postList.map(post => {
//         return {
//           id: post.data.id,
//           url: post.data.url,
//           title: post.data.title,
//           selftext: post.data.selftext,
//           created_utc: post.data.created_utc,
//           img: (
//             post?.data?.thumbnail === 'self' // с API не приходит
//               ? 'https://lmedia.xyz/placeholder.png'
//               : post?.data?.thumbnail
//           ),
//           thumbnail: post.data.thumbnail, // с API не приходит
//           author: post.data.author,
//           url_overridden_by_dest: post.data.url_overridden_by_dest
//         }
//       });
//       dispatch(updatePostListSuccess(
//         [...getState().postListReducer.posts, ...editedList],
//         resp.data.data.after
//       ));
//     })
//     .catch((err) => {
//       dispatch(updatePostListFailed(String(err)))
//     })
// };

// VARIANT 2
export const updatePostListAsync =
  (): ThunkAction<void, RootState, unknown, postListActions> =>
  async (dispatch, getState) => {
    try {
      const response = await axios.get("https://oauth.reddit.com/best", {
        headers: { Authorization: `bearer ${getState().tokenReducer.token}` },
        params: {
          limit: 5,
          after: getState().postListReducer.afterPoint,
        },
      });
      const postList: { data: IPostData }[] = response.data.data.children;
      const editedList: IPostData[] = postList.map((post) => {
        return {
          id: post.data.id,
          url: post.data.url,
          title: post.data.title,
          selftext: post.data.selftext,
          created_utc: post.data.created_utc,
          img:
            post?.data?.thumbnail === "self" // с API не приходит
              ? "https://lmedia.xyz/placeholder.png"
              : post?.data?.thumbnail,
          thumbnail: post.data.thumbnail, // с API не приходит
          author: post.data.author,
          url_overridden_by_dest: post.data.url_overridden_by_dest,
        };
      });
      dispatch(
        updatePostListSuccess(
          [...getState().postListReducer.posts, ...editedList],
          response.data.data.after
        )
      );
    } catch (error) {
      dispatch(updatePostListFailed(String(error)));
    }
  };
