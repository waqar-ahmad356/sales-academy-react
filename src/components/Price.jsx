import React from 'react'

const Price = () => {
  return (
    <section className='bg-[#163036] md:py-[80px] py-[32px]'>
    <div className='container'>
        <div className='flex items-center md:gap-[40px] xl:gap-[96px] gap-6 flex-wrap'>
            <p className='text-[16px] text-[#fff]'>Your Success is Most <br/> Important to us</p>
            <div className='flex items-center gap-[32px] lg:gap-[196px] flex-wrap'>
                <div className='flex flex-col gap-2 items-start'>
                <div className='flex items-center gap-0 flex-nowrap'>
                    <h2 className='md:text-[60px] text-[40px] font-bold lead-[72px] text-[#FCA311]' >45k - 100K</h2> <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 25C10 23.6193 11.1193 22.5 12.5 22.5H32.5C33.8808 22.5 35 23.6193 35 25C35 26.3807 33.8808 27.5 32.5 27.5H12.5C11.1193 27.5 10 26.3807 10 25ZM10 35C10 33.6193 11.1193 32.5 12.5 32.5H32.5C33.8808 32.5 35 33.6193 35 35C35 36.3807 33.8808 37.5 32.5 37.5H12.5C11.1193 37.5 10 36.3807 10 35Z" fill="#FCA311"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 25C15 14.1465 23.167 5 33.6538 5C40.541 5 46.4697 8.98558 49.6847 14.7659C50.356 15.9725 49.9217 17.4947 48.7152 18.1658C47.5085 18.8369 45.9863 18.4029 45.3153 17.1962C42.8768 12.8123 38.519 10 33.6538 10C26.2978 10 20 16.5236 20 25V35C20 43.4765 26.2978 50 33.6538 50C38.519 50 42.8768 47.1878 45.3153 42.8037C45.9863 41.5973 47.5085 41.163 48.7152 41.8343C49.9217 42.5052 50.356 44.0275 49.6847 45.2343C46.4697 51.0145 40.541 55 33.6538 55C23.167 55 15 45.8535 15 35V25Z" fill="#FCA311"/>
                </svg> </div>
                <p className='text-[18px] text-[#fff]'>Salary</p>
                </div>
                <div className='flex flex-col gap-2 items-start'>
              
                    <h2 className='md:text-[60px] text-[40px] font-bold lead-[72px] text-[#FCA311]' >100K +</h2> 
                   
                <p className='text-[18px] text-[#fff]'>Vacancies</p>
                </div>
            </div>
        </div>
    </div>
      
    </section>
  )
}

export default Price
