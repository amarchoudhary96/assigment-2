import React from "react";
import { AiFillCaretDown } from 'react-icons/ai';

const LeftBar = () => {
  return (
    <div className=" flex flex-col py-14 gap-9 items-center justify-center w-[250px] h-full bg-gray-100  mb-2">
      <div className="flex justify-center gap-3 items-center">
        <img
          src="https://scontent.fjai2-1.fna.fbcdn.net/v/t39.30808-1/320585792_1196035831293343_7169735604876376338_n.jpg?stp=dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=ZCYe3ZhoumAAX8q4Kl-&_nc_ht=scontent.fjai2-1.fna&oh=00_AfADLYcAKMFjwj3aqg8bxvopr6eqByNcY2A_yS_Ydz6flg&oe=64BFC4BC"
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h1 className="font-bold">Hi Amar</h1>
          <p className="text-[10px] font-bold">welcome back</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold">Today</p>
        <div>
                <h1 className="font-bold text-xl">$19,892</h1>
                <p className="text-[10px] font-medium">Account Balance</p>
        </div>
        <div>
                <h1 className="font-bold text-xl">$4000</h1>
                <p className="text-[10px] font-medium">Year-to-Date-Contribution</p>
        </div>
        <div>
                <h1 className="font-bold text-xl">$1892</h1>
                <p className="text-[10px] font-medium">Total Interest</p>
        </div>
        <div className="flex items-center justify-center bg-blue-500 py-3 gap-1 rounded-xl text-white text-[10px]">
        <button>I want to </button>
        <AiFillCaretDown/>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold">Recent Transaction</p>
        <div>
                <p className="text-[10px] font-medium">2020-7-8</p>
                <h1 className="font-bold text-[8px]">Withdrawal Transfer To Bank-XXX-11</h1>
        </div>
        <div>
                <p className="text-[10px] font-medium">2020-7-8</p>
                <h1 className="font-bold text-[8px]">Withdrawal Transfer To Bank-XXX-11</h1>
        </div>
        <div>
                <p className="text-[10px] font-medium">2020-7-8</p>
                <h1 className="font-bold text-[8px]">Withdrawal Transfer To Bank-XXX-11</h1>
        </div>
       
      </div>
    </div>
  );
};

export default LeftBar;
