import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSidebar } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiExit } from "react-icons/bi";



const MiniSidebar = () => {
  return (
        <div className="flex flex-col justify-between py-4 bg-white rounded-s-3xl  mb-2">
    <div className="flex flex-col gap-20">
      <div className="flex flex-col items-center gap-2">
        <img
          src="https://img.freepik.com/free-vector/butterfly-logo-colorful-gradient-illustrations_483537-975.jpg?w=2000"
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <AiOutlineSearch className=" text-gray-500"/>
      </div>
      <div  className="flex flex-col items-center gap-4 font-thin text-gray-500">
        <AiOutlineHome className="text-xl"/>
        <BiSidebar className="text-xl"/>
        <BsReverseLayoutTextSidebarReverse className="text-xl"/>
        <BsFillPersonFill className="text-xl"/>
      </div>
    </div>
      <div className="flex flex-col items-center gap-4 font-thin text-gray-500">
        <IoIosNotificationsOutline className="text-xl"/>
        <BiExit className="text-xl"/>
      </div>
      </div>
  );
};

export default MiniSidebar;
