import React from 'react'

const Button = ({value,className}) => {

  return (
    <div>
       <button type='button' className={`lg:text-[16px] text-[#181818] leading-6 font-normal rounded-[8px] bg-[#FCA311] lg:px-4 lg:py-[14px] ${className}`}>{value}</button>
    </div>
  )
}

export default Button
