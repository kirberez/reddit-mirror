import React from 'react';
import { Text } from '../../Text';
import styles from './threadtitle.css';

export function ThreadTitle() {  
  return (
    <div className={styles.threadTitle}>
      <Text
        As='h1'
        size={28}
        mobileSize={20}
      >
        Личный кабинет
      </Text>
    </div>
  );
}
