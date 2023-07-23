import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import { BiExit, BiSidebar } from 'react-icons/bi'
import { BsFillPersonFill, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
import { IoIosNotificationsOutline } from 'react-icons/io'


const Minibar = () => {
        const [activeIcon, setActiveIcon] = useState('');
      
        const handleClick = (iconName) => {
          setActiveIcon(iconName === activeIcon ? '' : iconName);
        };
      
        const getIconStyles = (iconName) => {
          return `text-gray-500 p-2 ${
            activeIcon === iconName ? 'text-white bg-blue-800 p-2' : ''
          } rounded-[10px] h-[40px] w-[40px] flex justify-center items-center`;
        };
      
        return (
          <div className="fixed bottom-0 left-0 right-0 h-16 w-full z-50 flex justify-between items-center text-gray-500 text-[15px] px-6 bg-white">
            <div onClick={() => handleClick('home')}>
              <AiOutlineHome className={getIconStyles('home')} />
            </div>
            <div onClick={() => handleClick('sidebar')}>
              <BiSidebar className={getIconStyles('sidebar')} />
            </div>
            <div onClick={() => handleClick('layout')}>
              <BsReverseLayoutTextSidebarReverse className={getIconStyles('layout')} />
            </div>
            <div onClick={() => handleClick('person')}>
              <BsFillPersonFill className={getIconStyles('person')} />
            </div>
            <div onClick={() => handleClick('search')}>
              <AiOutlineSearch className={getIconStyles('search')} />
            </div>
          </div>
        );
      };
      
      export default Minibar;