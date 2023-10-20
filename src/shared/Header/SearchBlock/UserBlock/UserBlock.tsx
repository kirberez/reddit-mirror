import React from 'react';
import { Break } from '../../../Break';
import { EIcon, Icon } from '../../../Icon';
import { Text, EColor } from '../../../Text';
import styles from './userblock.css';
import { PORT, URI } from '../../../../server/server';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

// const href = "https://www.reddit.com/api/v1/authorize?client_id=" + `9pG9fpT6RalYycYgkxJ2IA` + "&response_type=code&state=random_string&redirect_uri=" + `${URI}${PORT}` + "/auth&duration=permanent&scope=read submit identity"
// console.log(href);

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a 
      className={styles.userBox}
      href="https://www.reddit.com/api/v1/authorize?client_id=9pG9fpT6RalYycYgkxJ2IA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      // href={href}
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} className={styles.avatarImage} alt="user avatar" />
          : <Icon name={EIcon.anon} size={50} />
        }        
      </div>
      <div className={styles.username}>
        <Break size={12}/>
        {
          loading
          ? <Text size={20} color={EColor.grey99}>{'Загрузка...'}</Text>
          : <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Аноним'}</Text>
        }
        
      </div>
    </a>
  );
}
