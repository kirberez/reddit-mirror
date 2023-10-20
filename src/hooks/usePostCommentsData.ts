import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCommentListAsync } from "../store/commentList/actions";
import { RootState, store } from "../store/store";

export type ICommentProps = {
  author: string;
  body: string;
  created_utc: number;
  id: string;
  parent_id: string;
  replies?: {data: {children: ICommentProps []} } | null; // комментарии к комментарию
  subreddit: string;
  subreddit_id: string;
}

export function usePostCommentsData ( postId: string ) {
  const token = useSelector<RootState, string>(state => state.tokenReducer.token);
  const comments = useSelector<RootState, ICommentProps []>(state => state.commentListReducer.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    store.dispatch(updateCommentListAsync(postId))
    // dispatch(
    //   updateCommentListAsync(postId)
    // )
  }, [token, postId]);

  return [comments]
}    