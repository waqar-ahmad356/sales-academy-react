import React from 'react'
import Future_Card from './Future_Card'
import close from '../assets/close.png';
import check from '../assets/check.png'
import arrow_icon from '../assets/arrow-icon.png';

const Future = () => {
  return (
    <section className='lg:py-[80px] md:py-[40px] py-[32px] bg-[#fff]'>
    <div className='container'>
        <div className='flex flex-col items-center justify-center  gap-[80px]'>
        <div className=' flex flex-col items-center justify-center gap-3'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <span className='px-4 py-[6px] border-[1px] text-[16px] text-[#484A54] rounded-[36px] border-[#D9DADF]'>Our Range</span>
                <h2 className='text-[44px] text-[#181818] text-center font-bold leading-[54px]'>Start Your Future In Sales Academy</h2>
            </div>
            <p className='max-w-[785px] text-center text-[#373940] text-[16px]'>Lorem ipsum dolor sit amet consectetur. Adipiscing venenatis id sed justo vitae in. Sed aliquet lacinia a risus lacus risus. Risus et diam porta adipiscing. Sem risus morbi phasellus non.</p>
        </div>
        <div className='flex items-center justify-center gap-[70px] md:gap-6 flex-col md:flex-row'>
        <Future_Card title="Start Your Future In Sales Academy" q1="Be registered as a job seeker" ans1="You must be registered as a job seeker to be eligible for a training voucher" q2="Have German language skills at B2 level" ans2="This is important to ensure smooth communication in the course" q3="Willingness to invest 8 months of your time" ans3="The course duration is optimally adapted to teach you everything you need for your job" q4="Bring motivation and willingness to learn" ans4="We will teach you everything, but you must also want to do it yourself" check={check}/>
        <Future_Card title="Start Your Future In Sales Academy" q1="Be registered as a job seeker" ans1="You must be registered as a job seeker to be eligible for a training voucher" q2="Have German language skills at B2 level" ans2="This is important to ensure smooth communication in the course" q3="Willingness to invest 8 months of your time" ans3="The course duration is optimally adapted to teach you everything you need for your job" q4="Bring motivation and willingness to learn" ans4="We will teach you everything, but you must also want to do it yourself" close={close}/>

        </div>
        <button type='button  ' className='mt-[-48px] md:mt-[0px] flex items-center gap-2 rounded-[8px] py-4 px-4 bg-[#FCA311]'>Contact us now <img src={arrow_icon} alt=''/></button>
        </div>
        
    </div>
      
    </section>
  )
}

export default Future
