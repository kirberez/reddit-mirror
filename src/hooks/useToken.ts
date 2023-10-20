// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setToken } from '../store';

// export function useToken() {
//   // const [state, setState] = useState('');
//   const dispatch = useDispatch();

//   // Прокидываем токен с сервера на клиент (через объект window)
//   useEffect(() => {
//     if (window.__token__){
//       console.log('useEffect worked');
//       // setState(window.__token__) 

//       // dispatch(setToken())
//       dispatch({ type: "SET_TOKEN", token: window.__token__ })

//       // console.log('(useToken Redux) - token: ', state);
//     }
//   }, []);


//   // return [token];
//   return window.__token__;
// };   