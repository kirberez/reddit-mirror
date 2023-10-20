import classNames from "classnames";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./dropdown.css";

interface IDropdownProps {
  children: React.ReactNode;
  shift: { x: number; y: number };
  className?: "relative" | "absolute";
}

export function Dropdown({
  children,
  shift,
  className = "relative",
}: IDropdownProps) {
  const classes = classNames(className, styles.container);
  const ref = useRef<HTMLDivElement>(null);

  if (typeof window === "undefined" || !window?.document?.createElement) {
    return null;
  }

  const node = document.querySelector("#dropdown_content");
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={classes} ref={ref}>
      {/* <div  className={styles.listContainer}> */}
      <div style={{ left: shift.x, top: shift.y }} className={styles.list}>
        {children}
      </div>
      {/* </div> */}
    </div>,
    node
  );
}

// // РЕШЕНИЕ С КОСТЫЛЯМИ!!!
// interface IDropdownProps {
//   children: React.ReactNode;
//   shift: {x: number, y: number};
//   className?: string;
// }

// export function Dropdown({
//   children,
//   shift,
//   className=''
// }: IDropdownProps) {
//   const classes = classNames(className, styles.container);
//   const ref = useRef<HTMLDivElement>(null);

//   console.log('shift: ', shift)
//   const node = document.querySelector('#dropdown_content');
//   if (!node) return null;

//   return ReactDOM.createPortal(
//     (
//       <div  className={classes} ref={ref}>
//         <div className={styles.listContainer}>
//           <div style={{ right: shift.x, top: shift.y }} className={styles.list}>
//             {children}
//           </div>
//         </div>
//       </div>
//     ), node);
// };
