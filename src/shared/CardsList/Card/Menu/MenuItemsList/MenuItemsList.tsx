import React, { useEffect, useState } from 'react';
import { GenericList, IItem } from '../../../../GenericList';
import { EIcon, Icon } from '../../../../Icon';
import { EColor, Text } from '../../../../Text';
import styles from './menuitemslist.css';


interface IMenuItemsListProps {
  postId?: string;
}

const mobile: IItem [] = [
  {
    As: 'li',
    element: ( 
      <>
        <Icon 
          name={EIcon.block}
        />
        <Text
          color={EColor.grey99}
          size={14}
          mobileSize={12}
        >
          Скрыть
        </Text>
      </>
    ),
    className: `${styles.menuItem}`
  },
  {
    As: 'li',
    element: ( 
      <>
        <Icon name={EIcon.warning}/>
        <Text
          color={EColor.grey99}
          size={14}
          mobileSize={12}
        >
          Пожаловаться
        </Text>
      </>
    ),
    className: `${styles.menuItem}`
  },
]
const desktop: IItem [] = [
  {
    As: 'li',
    element: (
      <>
        <Icon name={EIcon.comment}/>
        <Text
          color={EColor.grey99}
          size={14}
          mobileSize={12}
        >
          Комментарии
        </Text>
      </>
    ),
    className: `${styles.menuItem}`
  },
  {
    As: 'li',
    element: (
      <>
        <Icon name={EIcon.share}/>
        <Text
          color={EColor.grey99}
          size={14}
          mobileSize={12}
        >
          Поделиться
        </Text>
      </>
    ),
    className: `${styles.menuItem}`
  },
  {
    As: 'li',
    element: (
      <>
        <Icon name={EIcon.block}/>
        <Text
          color={EColor.grey99}
          size={14}
          mobileSize={12}
        >
          Скрыть
        </Text>
      </>
    ),
    className: `${styles.menuItem}`
  },
  {
    As: 'li',
    element: (
      <>
        <Icon name={EIcon.save}/>
        <Text
          color={EColor.grey99}
          size={14}
          mobileSize={12}
        >
          Сохранить
        </Text>
      </>
    ),
    className: `${styles.menuItem}`
  },
  {
    As: 'li',
    element: (
      <>
        <Icon name={EIcon.warning}/>
        <Text
          color={EColor.grey99}
          size={14}
          mobileSize={12}
        >
          Пожаловаться
        </Text>
      </>
    ),
    className: `${styles.menuItem}`
  },
]

const mobileList = GenericList({list: mobile});
const desktopList = GenericList({list: desktop});

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  const [size, setSize] = useState(window.innerWidth < 1024 ? 'mobile' : 'desktop');
  const [total, setTotal] = useState(mobileList);
  const [flag, setFlag] = useState(false);

  const resizeHandler = () => {
    if (window.innerWidth < 1024) {
      setSize('mobile')
      console.log(`now mobile`);
    } else {
      setSize('desktop')
      console.log(`now desktop`);
    }
  }
  
  useEffect(() => {
    if (!flag) {
      setFlag(true)
      size === 'mobile' 
        ? setTotal(mobileList)
        : setTotal(desktopList)
      window.addEventListener('resize', resizeHandler);
      console.log('on'); 
      console.log('flag-on: ', flag);
    } 

    return () => {
      setFlag(false)
      window.removeEventListener('resize', resizeHandler)
      console.log('off');
      console.log('flag-off: ', flag);
    }
    }, [size])

  return (
    <ul className={styles.menuItemsList}>
      {
        total
      }
    </ul>
  )
}

