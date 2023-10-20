import {
  applyMiddleware,
  CombinedState,
  combineReducers,
  createStore,
  Middleware,
  Reducer,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { CommentInFormActions } from "./commentInForm/actions";
import {
  commentInFormReducer,
  CommentInFormReducerState,
} from "./commentInForm/reducer";
import { commentListActions } from "./commentList/actions";
import {
  commentListReducer,
  commentListReducerState,
} from "./commentList/reducer";
import { MeActions } from "./me/actions";
import { meReducer, MeReducerState } from "./me/reducer";
import { postListActions } from "./postList/actions";
import { postListReducer, postListReducerState } from "./postList/reducer";
import { TokenActions } from "./token/actions";
import { tokenReducer, tokenReducerState } from "./token/reducer";

export interface RootState {
  tokenReducer: tokenReducerState;
  commentInFormReducer: CommentInFormReducerState;
  commentListReducer: commentListReducerState;
  postListReducer: postListReducerState;
  meReducer: MeReducerState;
}

export type MyAction =
  | TokenActions
  | CommentInFormActions
  | commentListActions
  | postListActions
  | MeActions;

export const rootReducer: Reducer<
  CombinedState<RootState>,
  MyAction
> = combineReducers({
  tokenReducer,
  commentInFormReducer,
  commentListReducer,
  postListReducer,
  meReducer,
});

const logger: Middleware = (store) => (next) => (action) => {
  console.log("dispatching: ", action);
  const returnValue = next({ ...action, name: "Kirill" });
  console.log("action after next: ", returnValue);
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       thunk: {
//         extraArgument: {
//           api: logger,
//           otherValue: 42
//         }
//       }
//     }).concat(myMiddleware)
// })
