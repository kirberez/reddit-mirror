import React, { useRef, useState } from 'react';
import { CloseButton } from '../../../CloseButton';
import { Dropdown } from '../../../Dropdown';
import MenuIcon from '../../../Icons/MenuIcon';
import { MenuItemsList } from './MenuItemsList';
import styles from './menu.css';


interface IMenuProps {
  // Делаем дропдаун контролируемым
  isOpen?: boolean; // cписок открыт/закрыт
  onOpen?: () => void; // Колбэк, открывает список
  onClose?: () => void; // Колбэк, закрывает список
}

export function Menu({
  isOpen=false,
  onClose=() => setIsDropdownOpen(false), 
  onOpen=() => setIsDropdownOpen(true)
}: IMenuProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen); 
  const [shift, setShift] = useState({x: 0, y: 0}) // Здесь будут координаты
  const refBtn = useRef<HTMLButtonElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {  
    // получаем и записываем координаты кнопки
    if (!refBtn.current) return null;
    setShift({ 
      x: event.clientX + refBtn.current?.clientWidth / 2, 
      y: event.clientY + window.scrollY + refBtn.current?.clientHeight 
    })
    // Открываем/закрываем дропдаун
    isDropdownOpen ? onClose() : onOpen()
  }

  return (
    <div className={styles.menu}>
      <button 
        onClick={ event => handleClick(event) }
        className={styles.menuButton}
        ref={refBtn}
      >
        <MenuIcon />
      </button>
      {
        isDropdownOpen && (
          <Dropdown
            className={'absolute'}
            shift={shift}
            children={
              <div className={styles.dropdown}
              >
                <MenuItemsList />
                <CloseButton />
              </div>
            }
          />
        )
      }
    </div>
  );
}




// // РЕШЕНИЕ С КОСТЫЛЯМИ
// const handleClick = () => {    
//   if (!refBtn.current) return null;

//   let { x, y, width, height } = refBtn.current.getBoundingClientRect();
//   console.log('x, y, width, height: ', x, y, width, height)
//   x += width / 2;
//   y += height;
//   y += window.scrollY;
//   // setShift({x: x, y: y})
//   setShift({x: width / 2, y: y})

//   isDropdownOpen ? onClose() : onOpen()
// }

// return (
//   <div className={styles.menu}>
//     <button 
//       onClick={ handleClick }
//       className={styles.menuButton}
//       ref={refBtn}
//     >
//       <MenuIcon />
//     </button>
//     {
//       isDropdownOpen && (
//         <Dropdown
//           shift={shift}
//           children={
//             <div className={styles.dropdown}
//               onClick={ handleClick } // при нажатии внутри дропдауна - закрытие
//             >
//               <MenuItemsList />
//               <CloseButton />
//             </div>
//           }
//         />
//       )
//     }
//   </div>
// );
// }
