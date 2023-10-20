import React, { useState } from 'react';
import { ICommentProps } from '../../../../hooks/usePostCommentsData';
import { useUserAvatar } from '../../../../hooks/useUserAvatar';
import { generateRandomIndex } from '../../../../utils/react/generateRandomIndex';
import { CommentForm } from '../../../CommentForm';
import { EIcon, Icon } from '../../../Icon';
import styles from './comment.css';
import { CommentButtons } from './CommentButtons';

interface ICommentPropsTest {
  comment: ICommentProps;
  list?: ICommentProps [];
}

export function Comment({ comment, list }: ICommentPropsTest) {
  const { author, body, created_utc, id, parent_id, replies, subreddit, subreddit_id } = comment
  const [isAnswer, setIsAnswer] = useState(false);
  const userAvatarUrl = useUserAvatar(author);
  const userAppeal = author + ", "; // Делаем обращение к автору поста

  return (
    <div className={styles.commentContainer}>
      <div className={styles.mainCommentWrap} style={{ marginLeft: 38 }} >
        {/* LineSeparate */}
        <div className={styles.decorationWrap}>
            <div className={styles.arrows}>
              <button className={styles.up}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
                </svg>
              </button>
              <button className={styles.down}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#D9D9D9"/>
                </svg>
              </button>
            </div>
          </div>
    
          <div className={styles.commentWrap}>
            <div className={styles.commentHeader} >
              {
                userAvatarUrl
                  ? <img src={userAvatarUrl} style={{width: 20, height: 20}} alt='Аватар' />
                  : <Icon name={EIcon.anon} width={20} height={20} size={20} />
              }
              <div className={styles.commentMetaData} >
                <a href="#" className={styles.commentAuthor}>{author}</a>
                <span className={styles.commentDate}>
                  {created_utc}
                </span>
              </div>
              <p>{subreddit}</p>
            </div>
            <div className={styles.commentBody}>
              {body}
            </div>  
            <div>
              <CommentButtons onOpenForm={() => { setIsAnswer(true) }} />
              {
                isAnswer && (
                  <CommentForm userAppeal={userAppeal} />
                )
              }
            </div>
          </div>
      </div>
      {
        list?.map(answer => {
          const key = generateRandomIndex();
          return <Comment key={key} comment={answer} list={answer.replies?.data?.children} />
        })
      }
    </div>
  )
} 