// import React, { useState } from "react";

// type CommentContextType = {
//   value: string;
//   onChange: (value: string) => void;
// }

// export const commentContext = React.createContext<CommentContextType>({
//   value: '',
//   onChange: () => {}
// })

// export function CommentContextProvider ({ children }: { children: React.ReactNode }) {
//   const [commentValue, setCommentValue] = useState('');

//   return(
//     <commentContext.Provider value={{
//       value: commentValue,
//       onChange: setCommentValue
//     }} >
//       {children}
//     </commentContext.Provider>
//   )
// }