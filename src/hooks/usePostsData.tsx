import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

export interface IPostData {
  id: string,
  url: string,
  title: string,
  selftext: string,
  created_utc: number,
  thumbnail: string, // с API не приходит
  url_overridden_by_dest: string, // с API не приходит
  img: string,
  author: string,
  element?: React.ReactNode,
  As?: 'li' | 'div',
  onClick?: (id: string) => void;
}

export function usePostsData() {
  const token = useSelector<RootState, string>(state => state.tokenReducer.token);
  const posts = useSelector<RootState, IPostData []>(state => state.postListReducer.posts);
  const dispatch = useDispatch();

  
}

// export interface IBestPostState {
//   posts: IPostData [],
//   isLoading: boolean,
//   errorLoading: string,
//   afterPoint: string,
// }

// export function usePostsData() {
//   const token = useSelector<RootState, string>(state => state.tokenReducer.token);
//   const [posts, setPosts] = useState<IPostData []>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorLoading, setErrorLoading] = useState('');
//   const [afterPoint, setAfterPoint] = useState('');

//   const BestPostState: IBestPostState = {
//     posts: posts,
//     isLoading: isLoading,
//     errorLoading: errorLoading,
//     afterPoint: afterPoint,
//   }

//   useEffect(() => {
//     if (!token) return;

//     async function load() {
//       setIsLoading(true);
//       setErrorLoading('');
//       try {
//         const response = await axios.get('https://oauth.reddit.com/best', {
//           headers: { Authorization: `bearer ${token}` },
//           params: { 
//             limit: 10,
//             after: afterPoint,
//           }
//         })
//         console.log('response', response);
//         setAfterPoint(response.data.data.after);
//         const postList: {data: IPostData}[] = response.data.data.children;
//         const editedList: IPostData[] = postList.map(post => {
//           return {
//             id: post.data.id,
//             url: post.data.url,
//             title: post.data.title,
//             selftext: post.data.selftext,
//             created_utc: post.data.created_utc,
//             img: (
//               post?.data?.thumbnail === 'self' // с API не приходит
//                 ? 'https://lmedia.xyz/placeholder.png'
//                 : post?.data?.thumbnail
//             ),              
//             thumbnail: post.data.thumbnail, // с API не приходит
//             author: post.data.author,
//             url_overridden_by_dest: post.data.url_overridden_by_dest
//           }
//         })
//         setPosts( prevPosts => prevPosts.concat(editedList) ); // RENDER POSTS WITH SAME KEYS :C
//       } catch(error) {
//         setErrorLoading(String(error))
//       }
//       finally {
//         setIsLoading(false)
//       }
//     };

    
//     load();
//   }, [token, afterPoint]);

//   return BestPostState;
// };
