import React from 'react';
import { generateId } from '../../../utils/react/generateRandomIndex';
import { CloseButton } from '../../CloseButton';
import { Dropdown } from '../../Dropdown';
import { GenericList, IItem } from '../../GenericList';
import { EIcon, Icon } from '../../Icon';
import { EColor, Text } from '../../Text';
import styles from './sortblock.css';


const sort: IItem [] = [
  {
    element: (
      <>
        <Icon otherClasses={styles.itemIcon} name={EIcon.view} />
        <Text
          size={20}
          mobileSize={12}
          color={EColor.grey99}
        >
          Просмотренное
        </Text>
      </>
    ),
    className: `${styles.itemContainer}`,
  },
  {
    element: (
      <>
        <Icon otherClasses={styles.itemIcon} name={EIcon.save} />
        <Text
          size={20}
          mobileSize={12}
          color={EColor.grey99}
        >
          Сохранённое
        </Text>
      </>
    ),
    className: `${styles.itemContainer}`,
  },
  {
    element: (
      <>
        <Icon otherClasses={styles.itemIcon} name={EIcon.edit} />
        <Text
          size={20}
          mobileSize={12}
          color={EColor.grey99}
        >
          Мои посты
        </Text>
      </>
    ),
    className: `${styles.itemContainer}`,
  },
  {
    element: (
      <>
        <Icon otherClasses={styles.itemIcon} name={EIcon.comment} />
        <Text
          size={20}
          mobileSize={12}
          color={EColor.grey99}
        >
          Прокомментированное
        </Text>
      </>
    ),
    className: `${styles.itemContainer}`,
  },
];
const sortList = GenericList({list: sort});

export function SortBlock() {
  return (
    <div className={styles.sortBlock}>
      Мои посты
      {/* <Dropdown
        button={<button>PUSH ME</button>}
        children={
          <>
            {sortList}
            <CloseButton />
          </>
        }      
      /> */}
    </div>
  );
}
