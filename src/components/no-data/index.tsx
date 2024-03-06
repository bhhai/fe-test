import React from 'react'
import Img from "../../assets/icons/cloud.png"

function Nodata() {
  return (
    <div className='flex flex-col items-center py-[87px] pt-[31px]'>
      <img src={Img} alt="" />
      <p>We could not find weather information for the location above</p>
    </div>
  )
}

export default Nodata