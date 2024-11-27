import React,{useState} from 'react'

const Accordion = ({items}) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded-lg">
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-left flex justify-between items-start p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            <span className="text-lg font-medium">{item.title}</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openIndexes.includes(index) ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndexes.includes(index) && (
            <div className="p-4 bg-white text-gray-700">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
