import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const Upperbar = () => {
  return (
        <div className=" flex flex-col mt-[40px] gap-5 items-center justify-center w-[300px] h-full ml-8  mb-8">
        <div className="flex justify-center gap-3 items-center">
          <img
            src="https://scontent.fjai2-1.fna.fbcdn.net/v/t39.30808-1/320585792_1196035831293343_7169735604876376338_n.jpg?stp=dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=ZCYe3ZhoumAAX8q4Kl-&_nc_ht=scontent.fjai2-1.fna&oh=00_AfADLYcAKMFjwj3aqg8bxvopr6eqByNcY2A_yS_Ydz6flg&oe=64BFC4BC"
            alt=""
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h1 className="font-bold text-[20px]">Hi Amar</h1>
            <p className="text-[25px] font-bold">welcome back</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-gray-50 px-10 py-5 rounded-xl">
          <p className="font-bold">Today</p>
          <div>
                  <h1 className="font-bold text-[35px]">$19,892</h1>
                  <p className="text-[15px] font-medium">Account Balance</p>
          </div>
          <div className='flex justify-center items-center gap-12'>
          <div>
                  <h1 className="font-bold text-[15px]">$4000</h1>
                  <p className="text-[15px] font-medium">Year-to-Date</p>
          </div>
          <div>
                  <h1 className="font-bold text-[15px]">$1892</h1>
                  <p className="text-[15px] font-medium">Total Interest</p>
          </div>
          </div>
          <div className="flex items-center justify-center bg-blue-500 py-3 gap-1 rounded-xl text-white text-[10px]">
          <button>I want to </button>
          <AiFillCaretDown/>
          </div>
        </div>
        <div className="flex flex-col gap-4  bg-gray-50 px-8 py-8 rounded-xl">
          <p className="font-bold">Recent Transaction</p>
          <div>
                  <p className="text-[15px] font-medium">2020-7-8</p>
                  <h1 className="font-bold text-[15px]">Withdrawal Transfer To Bank-XXX-11</h1>
          </div>
         
         
        </div>
      </div>
  )
}

export default Upperbar
