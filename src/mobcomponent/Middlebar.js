import { AiFillCaretDown } from "react-icons/ai";
import Charts from "./Mobchart";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Middlebar = () => {
  return (
    <div className="w-100px h-full flex flex-col items-start gap-3 bg-white pl-8 mb-2">
      <div className="flex flex-col items-start ">
        <p className="text-[15px] text-blue-700 font-bold">Retirement Income</p>
        <h1 className="font-bold  text-[25px]">Starting Year 2056</h1>
      </div>
      <div className="flex flex-col items-start  gap-10">
        <div>
          <h1 className="font-bold text-[30px]">$300,000</h1>
          <p className="text-[15px]  text-gray-500">My Goal</p>
          <hr className="mt-1  border-blue-800 w-64" />
        </div>
        <div className="flex justify-start gap-5">
        <div>
          <h1 className="font-bold text-[25px]">59%</h1>
          <p className="text-[15px]  text-gray-500 ">Goal Achieved</p>
          <hr className="mt-1  border-blue-800 w-24" />
        </div>
        <div>
          <h1 className="font-bold text-[25px]">$300</h1>
          <p className="text-[15px]  text-gray-500">Monthly Income</p>
          <hr className="mt-1 border-blue-800 w-24" />
        </div>
        </div>
      </div>
      <div className="flex justify-start w-[50px] border-2">

      <Charts/>
      </div>
     
    </div>
  );
};

export default Middlebar;
