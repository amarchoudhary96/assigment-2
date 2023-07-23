import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const RightBar = () => {
  return (
    <div className="bg-white w-[350px] h-[640px] flex flex-col justify-start items-center py-16  rounded-r-3xl">
      <div className="bg-gray-100 px-5 py-10 flex flex-col gap-5">
        <h1 className="font-bold text-[15px]">Retirement strategy</h1>
        <div className="flex items-end gap-2">
          <div>
            <h1 className="font-bold text-[10px]">Employee Contribution</h1>

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
            <h1 className="font-bold text-[10px]">Retirement Age</h1>

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
            <p className="text-[15px] font-bold">65</p>
          </div>
        </div>
        <hr/>
        <div className="flex flex-col gap-5">
                <div className="flex gap-8">
                <h1 className="text-[12px] font-bold ">Employer Contribution</h1>
                <p className="text-[12px] font-bold ">8.4%</p>
                </div>
                <div className="flex gap-24">
                <h1 className="text-[12px] font-bold ">Interest Rate </h1>
                <p className="text-[12px] font-bold ">5%</p>
                </div>
                <button className="bg-blue-800 py-2 text-white rounded-xl text-sm">Update</button>
                <div className="flex items-center justify-center text-blue-700 text-[12px] font-bold">
                        <h1 >View Help Desk</h1>
                        <AiOutlineRight/>
                </div>
                
        </div>
        
      </div>
      <div className="mt-8 ">
        <div className="border-l-2 pl-16 border-indigo-500">
                <p className="font-bold text-[10px]">Are you considering a</p>
                <h1 className="font-bold text-[12px]">Housing Advance?</h1>
                <h2 className="text-[12px] text-gray-500">Limited Time reduced interest</h2>
                <div className=" flex items-center gap-2 text-[12px] text-blue-800 font-bold">
                        Learn More
                        <AiOutlineRight/>
                </div>
                </div>
        </div>
    </div>
  );
};

export default RightBar;
{
  /* <div className='form-control'>
<h5>price</h5>
<p className='price'>1000</p>
<input
  type='range'
  name='price'
  min={500}
  max={2000}
//   value={price}
/>
</div> */
}
