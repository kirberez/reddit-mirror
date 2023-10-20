import React, { useContext } from 'react';
import { userContext } from '../../context/userContext';
import { UserBlock } from './UserBlock';
import styles from './searchblock.css';

export function SearchBlock() {
  const { data, loading } = useContext(userContext);
  
  return (
    <div className={styles.searchBlock}>
      <UserBlock username={data?.name} avatarSrc={data?.iconImg} loading={loading} />
    </div>
  );
}
