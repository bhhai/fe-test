import React from 'react'
import { ReactComponent as IconClose } from '../../assets/icons/close.svg';

function Weather() {
  return (
    <div className='w-[680px] bg-white shadow px-[70px] py-[45px]'>
      <div >
        <div className='relative'>
          <input type="text" className='py-[10px] w-full px-5 outline-none border-solid border-[1px] border-[#969696] rounded' style={{ boxShadow: "0px 1px 1px 0px #00000040" }} />
          <IconClose className='absolute right-1 top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer' />
        </div>
      </div>

      <div className='border-solid border-[1px] border-[#969696] rounded mt-[11px]'>
        <div className='p-5'>
          <h6 className='text-[#333333] font-bold'>Hanoi, VN</h6>
          <span className='font-normal text-sm'>
            Sunday 9AM • Overcast clouds
          </span>
        </div>
        <div className='p-5 grid grid-cols-2'>
          <div className='flex gap-[6px] items-center'>
            <div>
              <IconClose />
            </div>
            <div className='flex gap-[6px]'>
              <h2 className='font-bold text-[44px]'>40*</h2>
              <div className='flex gap-1'>
                <span>
                  F
                </span>
                <span>/</span>
                <span>C</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <span>Humidity: </span>
              <span>82%</span>
            </div>
            <div>
              <span>Humidity: </span>
              <span>82%</span>
            </div>
            <div>
              <span>Humidity: </span>
              <span>82%</span>
            </div>
          </div>
        </div>

        <div>
          <ul className='grid grid-cols-8'>
            <li className='flex flex-col items-center py-5 border-solid border-[1px] border-[#969696]'>
              <p>Sun</p>
              <IconClose />
              <p>22°</p>
              <span>16°</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Weather