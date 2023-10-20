import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdowncontent.css';

interface IDropdownContentProps {
  children: React.ReactNode;
}

export function DropdownContent({children}: IDropdownContentProps) {


  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        {children}
      </div>
    </div>
  )
}
