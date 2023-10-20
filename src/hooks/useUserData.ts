import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { meRequestAsync } from '../store/me/actions';
import { IUserData } from '../store/me/reducer';
import { RootState, store } from "../store/store";


export function useUserData() {
  const data = useSelector<RootState, IUserData>(state => state.meReducer.data);
  const loading = useSelector<RootState, boolean>(state => state.meReducer.loading);
  const token = useSelector<RootState, string>(state => state.tokenReducer.token);  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!token) return;
    // if (token && token.length > 0 && token != 'undefined') {
      store.dispatch(meRequestAsync())
      // dispatch(meRequestAsync())
    // }
  }, [token]); 
  return {
    data,
    loading
  } 
}  