import React from 'react';
import { EColor, Text } from '../Text';
import styles from './closebutton.css';

interface ICloseButtonProps {
  
}

export function CloseButton() {
  return (
    <button className={styles.closeButton}>
      <Text
        color={EColor.grey66}
        size={14}
        mobileSize={12}
      >
        Закрыть
      </Text>
    </button>
  );
}
