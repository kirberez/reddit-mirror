// import React from "react";
// import { IPostData, usePostsData } from "../../hooks/usePostsData";
// import { Card } from "../CardsList/Card";

// // Контекст это глобальная переменная
// // Обновляется тогда, когда передаём в него новый объект!

// interface IBestPostContextState {
//   posts: IPostData [],
//   isLoading: boolean,
//   errorLoading: string,
//   afterPoint: string,
// }

// export const bestPostContextState = React.createContext<IBestPostContextState>({
//   posts: [],
//   isLoading: false,
//   errorLoading: '',
//   afterPoint: '',
// });

// export function BestPostContextStateProvider({children}: { children: React.ReactNode }) {
//   const BestPostContextState: IBestPostContextState = usePostsData();
  
//   BestPostContextState.posts.map(post => {
//     post.element = <Card postId={post.id} title={post.title} img={post.img} />;
//     post.As = 'li';
//     return post
//   })
  
  
//   return ( 
//     <bestPostContextState.Provider value={ BestPostContextState }>
//       { children } 
//     </bestPostContextState.Provider>
//   )
// } 