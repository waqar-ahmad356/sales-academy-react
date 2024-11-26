import React from 'react'
import Button from '../components/Button'
import time_icon from '../assets/time.png'
import euro_icon from '../assets/euro.png'
import hardware_icon from '../assets/hardware.png'
import language_icon from '../assets/language.png'
import users_icon from '../assets/users.png'
import location_icon from '../assets/location.png'
import download_icon from '../assets/download.png';

const Offer = () => {
    const cards=[{
        id:1,
        card_logo:time_icon,
        card_title:"Course Duration",
        card_description:"8 months (full-time)"
    },
    {
        id:2,
        card_logo:euro_icon,
        card_title:"Cost",
        card_description:"8 months (full-time)"

    },
    {
        id:3,
        card_logo:users_icon,
        card_title:"Number of Participants",
        card_description:"15 to 25 participants",

    },
    {
        id:4,
        card_logo:location_icon,
        card_title:"Course Language",
        card_description:"Good knowledge of German is necessary"

    },
    {
        id:5,
        card_logo:hardware_icon,
        card_title:"Location",
        card_description:"Virtual Classroom (Home Office)"
    },
    {
        id:6,
        card_logo:language_icon,
        card_title:"Hardware Included for Free",
        card_description:"Macbook, mouse and headset"

    },

]
  
  return (
    <section className='bg-[#F3F3F5] py-8 md:py-[40px] lg:py-[80px]'>
    <div className='container'>
        <div className='flex flex-col gap-8 md:gap-[40px] lg:gap-[60px]  md:items-start md:justify-start items-center justify-center'>
            <div className='flex flex-col items-center md:items-start justify-center gap-3'>
                <div className='flex flex-col items-center md:items-start justify-center md:justify-start gap-2'>
                    <span className='px-4 py-[6px] border-[1px] md:text-left text-[16px] text-[#484A54] rounded-[36px] border-[#D9DADF]'>What we Offer</span>
                    <h2 className='text-[44px] text-[#181818] md:text-left text-center font-bold leading-[54px]'>Our Course Offerings summarized</h2>
                </div>
                <p className='text-center md:text-left  text-[16px] text-[#163036] max-w-[844px]'>With our course, you lay the foundation for a successful career change into the world of sales. After completing the course, you will be a certified sales professional and will also receive certificates in the most commonly used CRM tools in sales (Hubspot, Salesforce). </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-3 gap-6 w-[100%]'>
                {cards.map((card)=>{
                    return (
                        <div key={card.id} className='bg-white rounded-[16px] p-6 flex items-start gap-2 '>
                        <div className='flex items-center justify-center rounded-[47px] p-[10px] bg-[#FFF4C5]'>
                            <img src={card.card_logo} alt={card.card_title} className='w-[40px]'/>
                            </div>
                            <div className='flex flex-col items-start gap-2'>
                                <h3 className='text-[24px] text-[#181818] font-semibold'>{card.card_title}</h3>
                                <p className='text-[#373940]'>{card.card_description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
           <div className='mx-auto'>
            <button type='button' className='flex items-center gap-2 rounded-lg bg-[#FCA311] px-4 py-4'>Download info flyer <img src={download_icon} alt='download-icon'/></button>
           </div>
        </div>
    </div>
      
    </section>
  )
}

export default Offer
