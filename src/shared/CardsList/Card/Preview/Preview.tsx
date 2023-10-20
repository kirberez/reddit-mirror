import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  img: string;
}

export function Preview( { img }: IPreviewProps ) {
  return (
    <div className={styles.preview}>
      <img 
        className={styles.previewImg}
        src={img} 
        alt="picture" 
      />
    </div>
  );
}
