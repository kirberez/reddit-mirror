// import { Reducer, ActionCreator } from "redux";
// import { ICommentProps } from "../hooks/usePostCommentsData";
// export const UPDATE_MAINCOMMENT = 'UPDATE_MAINCOMMENT';

// export type UpdateMainCommentAction = {
//   type: typeof UPDATE_MAINCOMMENT;
//   mainComments: ICommentProps [];
// }

// export interface mainCommentsReducerState {
//   comments: ICommentProps [];
// }

// export const initialMainCommentsState: mainCommentsReducerState = {
//   comments: [
//     {
//       author: 'any author',
//       body: '',  
//       created_utc: 0,
//       id: '',
//       parent_id: '',
//       replies: null, 
//       subreddit: '',
//       subreddit_id: '',
//     }
//   ]
// };

// export const updateMainComment: ActionCreator<UpdateMainCommentAction> = (mainComments) => ({
//   type: UPDATE_MAINCOMMENT,
//   mainComments
// })

// export const mainCommentsReducer: Reducer<mainCommentsReducerState, UpdateMainCommentAction> = (state = initialMainCommentsState, action) => {
//   switch (action.type) {
//     case UPDATE_MAINCOMMENT: 
//       return {
//         ...state,
//         comments: action.mainComments,
//       };
//     default: 
//       return state; 
//   }
// }

  
