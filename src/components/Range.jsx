import React from 'react'
import fund_icon from '../assets/fund-icon.png';
import career_icon from '../assets/career-icon.png';
import home_office_icon from '../assets/home-office-icon.png';
import tutor_icon from '../assets/tutor-icon.png';

const Range = () => {
    const cards=[{
        id:1,
        card_logo:fund_icon,
        card_title:"100% State Funded",
        card_description:"Thanks to the training voucher from the employment agency, the job center or the pension insurance, our course is completely free for every participant."

    },
    {
        id:2,
        card_logo:tutor_icon,
        card_title:"Professional Lecturers and Tutors",
        card_description:"Thanks to the training voucher from the employment agency, the job center or the pension insurance, our course is completely free for every participant."

    },
    {
        id:3,
        card_logo:home_office_icon,
        card_title:"Home Office (Remote Setup)",
        card_description:"Thanks to the training voucher from the employment agency, the job center or the pension insurance, our course is completely free for every participant."

    },
    {
        id:4,
        card_logo:career_icon,
        card_title:"Placement and Career Advice",
        card_description:"Thanks to the training voucher from the employment agency, the job center or the pension insurance, our course is completely free for every participant."

    },

]
  return (
    <section className='bg-[#163036] py-8'>
      <div className='container'>
        <div className='flex flex-col gap-6 md:gap-[60px] items-center justify-center'>
          <div className='flex flex-col gap-3 md:gap-[18px] items-center justify-center'>
            <div className='flex flex-col gap-2 md:gap-3 items-center'>
              <span className='px-4 py-[6px] border-[1px] text-[16px] text-[#FBFBFB] rounded-[36px] border-[#D9DADF]'>Our Range</span>
              <h2 className='text-[44px] text-[#fff] text-center font-bold leading-[54px]'>Start Your Future In Sales Academy</h2>
            </div>
            <p className='text-center  text-[16px] text-[#FBFBFB] max-w-[785px]'>
            Lorem ipsum dolor sit amet consectetur. Adipiscing venenatis id sed justo vitae in. Sed aliquet lacinia a risus lacus risus. Risus et diam porta adipiscing. Sem risus morbi phasellus non.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-center justify-center'>
            {cards.map((card)=>{
                return(
                    <div key={card.id} className='flex flex-col justify-center items-center gap-6 p-6 rounded-3xl bg-[#284A51]'>
                        <img src={card.card_logo} alt="card logo" className='w-[80px]'/>
                        <div className='flex flex-col justify-center items-center gap-2'>
                        <h3 className='text-[24px] text-[#fff] font-semibold text-center max-w-[254px]'>{card.card_title}</h3>
                        <p className='text-[16px] text-[#fff] text-center '>{card.card_description}</p>

                        </div>
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Range
