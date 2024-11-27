import React from 'react'
import Team from '../components/Team'
import Accordion from '../components/Accordion';

const Tech_Team = () => {
    const accordionItems = [
        {
          title: "What’s the basics of Digital Sales",
          content: "Lorem ipsum dolor sit amet consectetur. Dui ullamcorper aliquam in in viverra nibh nunc. Feugiat adipiscing ipsum lobortis nulla nibh nunc. Feugiat adipiscing ipsum lobortis nulla.",
        },
        {
            title: "What’s the basics of Digital Sales",
            content: "Lorem ipsum dolor sit amet consectetur. Dui ullamcorper aliquam in in viverra nibh nunc. Feugiat adipiscing ipsum lobortis nulla nibh nunc. Feugiat adipiscing ipsum lobortis nulla.",
          },
          {
            title: "What’s the basics of Digital Sales",
            content: "Lorem ipsum dolor sit amet consectetur. Dui ullamcorper aliquam in in viverra nibh nunc. Feugiat adipiscing ipsum lobortis nulla nibh nunc. Feugiat adipiscing ipsum lobortis nulla.",
          },
          {
            title: "What’s the basics of Digital Sales",
            content: "Lorem ipsum dolor sit amet consectetur. Dui ullamcorper aliquam in in viverra nibh nunc. Feugiat adipiscing ipsum lobortis nulla nibh nunc. Feugiat adipiscing ipsum lobortis nulla.",
          },
          {
            title: "What’s the basics of Digital Sales",
            content: "Lorem ipsum dolor sit amet consectetur. Dui ullamcorper aliquam in in viverra nibh nunc. Feugiat adipiscing ipsum lobortis nulla nibh nunc. Feugiat adipiscing ipsum lobortis nulla.",
          },
          {
            title: "What’s the basics of Digital Sales",
            content: "Lorem ipsum dolor sit amet consectetur. Dui ullamcorper aliquam in in viverra nibh nunc. Feugiat adipiscing ipsum lobortis nulla nibh nunc. Feugiat adipiscing ipsum lobortis nulla.",
          },
      ];
  return (
    <>
    <div className='py-[80px]'>
    <div className='container'>
      <Team/>
    </div>
    
    </div>
    <div className='py-[80px]'>
    <div className='container'>
        <Accordion items={accordionItems}/>
    </div>
    </div>
    </>
  )
}

export default Tech_Team
