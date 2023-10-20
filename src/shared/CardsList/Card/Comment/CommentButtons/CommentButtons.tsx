import React from 'react';
import { EIcon, Icon } from '../../../../Icon';
import styles from './commentbuttons.css';

interface ICommentButtonsProps {
  onOpenForm?: () => void;
}

export function CommentButtons({ onOpenForm }: ICommentButtonsProps ) {
  return (
    <div className={styles.commentButtonsWrap}>
      <button className={styles.buttonWrap} onClick={onOpenForm} >
        <Icon name={EIcon.comment} width={16} height={16} />
        <span className={styles.buttonText}>Ответить</span>
      </button>
      <button className={styles.buttonWrap} >
        <Icon name={EIcon.share} width={16} height={16} />
        <span className={styles.buttonText}>Поделиться</span>
      </button>
      <button className={styles.buttonWrap} >
        <Icon name={EIcon.warning} width={16} height={16} />
        <span className={styles.buttonText}>Пожаловаться</span>
      </button>
    </div>
  );
}
