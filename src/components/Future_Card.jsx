import React from 'react'

const Future_Card = ({title,q1,ans1,q2,ans2,q3,ans3,q4,ans4, close,check}) => {
  return (
    <div className='flex relative flex-col items-start gap-[32px] pt-[80px] pb-[32px] px-[32px] bg-[#F3F3F5] rounded-[18px]'>
    <h3 className='text-[#181818] text-[24px] font-semibold leading-8'>{title}</h3>
    <div className='flex flex-col items-start gap-1'>
        <span className='text-[20px] font-medium text-[#373940]'>{q1}</span>
        <p className='text-[16px] max-w-[321px] font-normal leading-6'>{ans1}</p>
    </div>
    <div className='flex flex-col items-start gap-1'>
        <span className='text-[20px] font-medium text-[#373940]'>{q2}</span>
        <p className='text-[16px] max-w-[321px] font-normal leading-6'>{ans2}</p>
    </div>
    <div className='flex flex-col items-start gap-1'>
        <span className='text-[20px] font-medium text-[#373940]'>{q3}</span>
        <p className='text-[16px] max-w-[321px] font-normal leading-6'>{ans3}</p>
    </div>
    <div className='flex flex-col items-start gap-1'>
        <span className='text-[20px] font-medium text-[#373940]'>{q4}</span>
        <p className='text-[16px] max-w-[321px] font-normal leading-6'>{ans4}</p>
    </div>
    {
      check&&( <img src={check} className='absolute top-[-40px] left-[40%] ' alt='check'/>)
    }
 {
  close&& ( <img src={close} className='absolute top-[-40px] left-[40%]' alt='close'/>)
 }
 

 
      
    </div>
  )
}

export default Future_Card
