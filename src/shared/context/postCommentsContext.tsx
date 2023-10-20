// import React from 'react';
// import { usePostCommentsData } from '../../hooks/usePostCommentsData';

// // !TODO
// // POSTCONTEXT сейчас не используется!
// // 


// interface IPostCommentContextData {

// }

// export const postCommentsContext = React.createContext<IPostCommentContextData []>([]);


// export function postCommentsContextProvider({children}: {children: React.ReactNode}) {
//   const [comments] = usePostCommentsData('postId must be there as a prop of Component')

//   return (
//     <postCommentsContext.Provider value={[]}>
//       { children }
//     </postCommentsContext.Provider>
//   )
// }