import React from 'react';
import styles from './text.css';
import classNames from 'classnames';

type TSizes = 0 | 10 | 12 | 14 | 16 | 20 | 28;

export enum EColor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  greyF4 = 'greyF4',
  greyF3 = 'greyF3',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
};

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  invisible?: boolean;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  bold?: boolean;
  otherClasses?: string;
}

export function Text(props: ITextProps) {
  const { 
    As = 'span', 
    color = EColor.black, 
    bold = false,
    otherClasses = '',
    children,
    invisible = false, 
    size,
    mobileSize, 
    tabletSize, 
    desktopSize 
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    { [styles.bold]: bold },
    { [styles.invisible]: invisible },
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color],
    otherClasses
  );
  

  return (
    <As className={classes}>
      {children}
    </As>
  );
}


