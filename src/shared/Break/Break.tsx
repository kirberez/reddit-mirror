// Компонент-отступ
// 
// 
import classNames from 'classnames';
import React from 'react';
import styles from './break.css';

type TBreakSizes = 0 | 4 | 8 | 10 | 12 | 16 | 20;
type TDisplays = 'mobile' | 'tablet' | 'desktop';

interface IBreakProps {
  children?: React.ReactNode;
  size: TBreakSizes;
  mobileSize?: TBreakSizes;
  tabletSize?: TBreakSizes;
  desktopSize?: TBreakSizes;
  inline?: boolean;
  top?: boolean;
}

export function Break(props: IBreakProps) {
  const {
    inline = false,
    top = false,
    size,
    mobileSize,
    tabletSize,
    desktopSize, 
  } = props

  const classes = classNames(
    styles[`s${size}`],
    { [styles[`mobile_s${mobileSize}`]]: mobileSize },
    { [styles[`tablet_s${tabletSize}`]]: tabletSize },
    { [styles[`desktop_s${desktopSize}`]]: desktopSize },
    { [styles.inline]: inline },
    { [styles.top]: top },
  )

  return (
    <div className={classes} />
  );
}
