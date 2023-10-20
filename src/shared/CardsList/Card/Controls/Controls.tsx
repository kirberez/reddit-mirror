import React from 'react';
import { CommentButton } from './CommentButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

interface IControlProps {
  id: string;
}

export function Controls() {


  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentButton />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
