import React from 'react'
import { AiFillCaretDown, AiOutlineRight } from 'react-icons/ai'
import Circle from "react-circle";


const Lowerbar = () => {
  return (
        <>
    <div className='mb-[100px] flex flex-col items-start px-8 mt-2 gap-10 '>
      <div>
        <h1 className="font-bold text-[20px]">How do I Compair to my peers? </h1>
        <p className="text-[12px]  text-gray-500">
          These number represent current goal achivement
        </p>
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className='flex flex-col gap-2'>
          <div className="flex items-center gap-2 text-[17px] font-bold">
            <h1>Age : </h1>
            <p className=" text-gray-500">Under 30</p>
            <AiFillCaretDown />
          </div>
          <hr className="mt-1  w-[300px]" />
          <div className="flex items-center gap-2 text-[17px] font-bold">
            <h1>Salery :</h1>
            <p className=" text-gray-500"> K 20-K 30</p>
            <AiFillCaretDown />
          </div>
          <hr className="mt-1 w-[300px]" />

          <div className="flex items-center gap-2 text-[17px] font-bold">
            <h1>Gender : </h1>
            <p className=" text-gray-500">Male</p>
            <AiFillCaretDown />
          </div>
          <hr className="mt-1 w-[300px]" />
        </div>
        <div className=" w-[300px] h-[50px] font-bold text-[30px] flex justify-start pl-6 items-center gap-8">
            
           
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
          <div className='flex  items-center gap-20 font-bold text-[15px] ' >
                <p>Average</p>                
                <p >Top</p>                
                <p >Me</p>                

            </div>
            
      </div>
      
    </div>
      <div className="bg-gray-100 pl-10 py-10 flex flex-col gap-5 ">
      <h1 className="font-bold text-[25px]">Retirement strategy</h1>
      <div className="flex items-end gap-2">
        <div>
          <h1 className="font-bold text-[15px]">Employee Contribution</h1>

          <input
            type="range"
            name="price"
            min={0}
            max={20}
            value={12}
            className=" h-[4px] bg-blue-500 rounded-md text-white"
          />
        </div>

        <div className="w-9 h-7 bg-white flex justify-center items-center rounded-sm">
          <p className="text-[15px] font-bold  ">12%</p>
        </div>
      </div>
      <div className="flex items-end gap-2">
        <div>
          <h1 className="font-bold text-[15px]">Retirement Age</h1>

          <input
            type="range"
            name="price"
            min={0}
            max={100}
            value={65}
            className=" h-[4px] bg-blue-500 rounded-md text-white"
          />
        </div>
        <div className="w-9 h-7 bg-white flex justify-center items-center rounded-sm">
          <p className="text-[15px] font-bold ">65</p>
        </div>
      </div>
      <hr/>
      <div className="flex flex-col gap-5">
              <div className="flex gap-8">
              <h1 className="text-[20px] font-bold ">Employer Contribution</h1>
              <p className="text-[20px] font-bold ">8.4%</p>
              </div>
              <div className="flex gap-24">
              <h1 className="text-[15px] font-bold ">Interest Rate </h1>
              <p className="text-[15px] font-bold ">5%</p>
              </div>
              <button className="bg-blue-800 py-4 w-[300px] mr-6 text-white rounded-xl text-sm">Update</button>
              <div className="flex items-center justify-center text-blue-700 text-[12px] font-bold">
                      <h1 >View Help Desk</h1>
                      <AiOutlineRight/>
              </div>
              
      </div>
      
    </div>
    </>
  )
}

export default Lowerbar
