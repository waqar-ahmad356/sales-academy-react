import React from 'react'
import { useState } from 'react';
import team_1 from '../assets/team-member-1.png'
import team_2 from '../assets/team-member-2.png'
import team_3 from '../assets/team-member-4.png'
import team_4 from '../assets/team-member-5.png'

const Team = () => {
    const [selectedCategory, setSelectedCategory] = useState("Lecturers");
  const cards = [
    { id: 1, image:team_1, title: "Frank Didszuleit", description:"Lorem ipsum dolor sit amet consectetur. Dignissim pharetra rhoncus turpis phasellus at etiam platea vestibulum aliquet. Vitae etiam donec tristique tortor egestas lectus arcu sed. Velit non aliquam pellentesque accumsan. Lectus imperdiet parturient ultrices fermentum. Nisl mauris duis eros eget mauris. Pretium sed ut aliquet facilisis nascetur porttitor vel.", category: "Lecturers" },
    { id: 2, image:team_2, title: "Thomas Wehrmann",description:"Lorem ipsum dolor sit amet consectetur. Dignissim pharetra rhoncus turpis phasellus at etiam platea vestibulum aliquet. Vitae etiam donec tristique tortor egestas lectus arcu sed. Velit non aliquam pellentesque accumsan. Lectus imperdiet parturient ultrices fermentum. Nisl mauris duis eros eget mauris. Pretium sed ut aliquet facilisis nascetur porttitor vel.",  category: "Tutor" },
    { id: 3, image:team_3, title: "Katja Bosler", description:"Lorem ipsum dolor sit amet consectetur. Dignissim pharetra rhoncus turpis phasellus at etiam platea vestibulum aliquet. Vitae etiam donec tristique tortor egestas lectus arcu sed. Velit non aliquam pellentesque accumsan. Lectus imperdiet parturient ultrices fermentum. Nisl mauris duis eros eget mauris. Pretium sed ut aliquet facilisis nascetur porttitor vel.",  category: "Lecturers" },
    { id: 4, image:team_4, title: "Paolo Perone",description:"Lorem ipsum dolor sit amet consectetur. Dignissim pharetra rhoncus turpis phasellus at etiam platea vestibulum aliquet. Vitae etiam donec tristique tortor egestas lectus arcu sed. Velit non aliquam pellentesque accumsan. Lectus imperdiet parturient ultrices fermentum. Nisl mauris duis eros eget mauris. Pretium sed ut aliquet facilisis nascetur porttitor vel.",  category: "Tutor" },
    { id: 5, image:team_4, title: "Michale Kurt",description:"Lorem ipsum dolor sit amet consectetur. Dignissim pharetra rhoncus turpis phasellus at etiam platea vestibulum aliquet. Vitae etiam donec tristique tortor egestas lectus arcu sed. Velit non aliquam pellentesque accumsan. Lectus imperdiet parturient ultrices fermentum. Nisl mauris duis eros eget mauris. Pretium sed ut aliquet facilisis nascetur porttitor vel.",  category: "Student Success Manager" },
  ];
  const categories = ["Lecturers", "Tutor", "Student Success Manager"];

  const filteredCard=cards.filter((card)=>card.category===selectedCategory)
  return (
    <div>
    <div className="flex gap-[40px] items-start max-w-[654px] rounded-[12px] border-[1px] border-[#C6C8D0] p-3">
        {categories.map((category) => (
          
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-[40px] py-[18px] rounded-[8px] ${
              selectedCategory === category
                ? "bg-[#FCA311] text-[#181818]"
                : "bg-white text[#181818]"
            }`}
          >

            {category}
            
          </button>
          
        ))}
      </div>
       {/* Card Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[40px]">
       {filteredCard.map((card) => (
         <div
           key={card.id}
           className="flex flex-col items-start gap-6 max-w-[410px]"
         ><img src={card.image} width="410" height="344" className='h-[100%]'  alt='team'/>
           <h2 className="text-lg font-medium">{card.title}</h2>
           <p className="text-sm text-gray-600 max-w-[410px]">{card.description}</p>
         
         </div>
       ))}
     </div>
   </div>
  )
}

export default Team
