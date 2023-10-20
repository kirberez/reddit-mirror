import React from 'react';
import { generateRandomIndex } from '../../utils/react/generateRandomIndex';
import styles from './genericlist.css';

export interface IItem {
  element?: React.ReactNode;
  id?: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

export interface IGenericListProps {
  list: IItem [];
}

const noop = () => {};

export function GenericList({ list }: IGenericListProps) {
  return (
    <> 
      {list.map(( {
        As = 'div', 
        element, 
        onClick = noop, 
        className, 
        id = generateRandomIndex(), 
        href 
      } ) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {element}
        </As>
      ))}
    </>
  );
}
