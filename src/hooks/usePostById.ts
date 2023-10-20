import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { usePostCommentsData } from "./usePostCommentsData";
import { IPostData } from "./usePostsData";


export function usePostById(id: string) {
  // if (!id) return null
  // const [post] = useContext(bestPostContextState).posts.filter(post => post.id === id);
  const [post] = useSelector<RootState, IPostData []>(state => state.postListReducer.posts)
  const [comments] = usePostCommentsData(id);

  console.log('Comments in UsePostById: >>> ', comments);
  
  return post
}