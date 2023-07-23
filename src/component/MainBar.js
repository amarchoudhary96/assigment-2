import { AiFillCaretDown } from "react-icons/ai";
import Charts from "./Chart";
import React from "react";
import Circle from "react-circle";

const MainBar = () => {
  return (
    <div className="w-[700px] h-[640px] flex flex-col gap-5 py-10 px-20 bg-white pl-[150px]">
      <div className="flex flex-col items-start ">
        <p className="text-[10px] text-blue-700 font-bold">Retirement Income</p>
        <h1 className="font-bold">Starting Year 2056</h1>
      </div>
      <div className="flex items-center  gap-24">
        <div>
          <h1 className="font-bold">$300,000</h1>
          <p className="text-[10px]  text-gray-500">My Goal</p>
          <hr className="mt-1  border-blue-800 w-24" />
        </div>
        <div>
          <h1 className="font-bold">59%</h1>
          <p className="text-[10px]  text-gray-500 ">Goal Achieved</p>
          <hr className="mt-1  border-blue-800 w-24" />
        </div>
        <div>
          <h1 className="font-bold">$300</h1>
          <p className="text-[10px]  text-gray-500">Monthly Income</p>
          <hr className="mt-1 border-blue-800 w-24" />
        </div>
      </div>
      <Charts />
      <div>
        <h1 className="font-bold">How do I Compair to my peers? </h1>
        <p className="text-[10px]  text-gray-500">
          These number represent current goal achivement
        </p>
      </div>
      <div className="flex items-center gap-16">
        <div>
          <div className="flex items-center gap-2 text-[12px] font-bold">
            <h1>Age : </h1>
            <p className=" text-gray-500">Under 30</p>
            <AiFillCaretDown />
          </div>
          <hr className="mt-1  w-[130px]" />
          <div className="flex items-center gap-2 text-[12px] font-bold">
            <h1>Salery :</h1>
            <p className=" text-gray-500"> K 20-K 30</p>
            <AiFillCaretDown />
          </div>
          <hr className="mt-1 w-[130px]" />

          <div className="flex items-center gap-2 text-[12px] font-bold">
            <h1>Gender : </h1>
            <p className=" text-gray-500">Male</p>
            <AiFillCaretDown />
          </div>
          <hr className="mt-1 w-[130px]" />
        </div>
        <div className="w-[200px] h-[80px] font-bold text-[30px] flex justify-center items-center gap-5">
          <Circle
            animate={true}
            animationDuration="1s"
            responsive={true}
            size={70}
            lineWidth={40}
            progress={78} 
            progressColor="cornflowerblue"
            bgColor="whitesmoke"
            textColor="hotpink"
            textStyle={{
              font: "bold 6rem Helvetica, Arial, sans-serif",
            }}
            percentSpacing={10}
            roundedStroke={true}
            showPercentage={true} 
            showPercentageSymbol={true} 
          />
          <Circle
            animate={true}
            animationDuration="1s"
            responsive={true}
            size={70}
            lineWidth={40}
            progress={95} 
            progressColor="cornflowerblue"
            bgColor="whitesmoke"
            textColor="hotpink"
            textStyle={{
              font: "bold 6rem Helvetica, Arial, sans-serif",
            }}
            percentSpacing={10}
            roundedStroke={true}
            showPercentage={true} 
            showPercentageSymbol={true} 
          />
          <Circle
            animate={true}
            animationDuration="1s"
            responsive={true}
            size={70}
            lineWidth={40}
            progress={59} 
            progressColor="cornflowerblue"
            bgColor="whitesmoke"
            textColor="hotpink"
            textStyle={{
              font: "bold 6rem Helvetica, Arial, sans-serif",
            }}
            percentSpacing={10}
            roundedStroke={true}
            showPercentage={true} 
            showPercentageSymbol={true} 
          />
        </div>
      </div>
    </div>
  );
};

export default MainBar;
