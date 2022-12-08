import React from 'react';
const className="w-full text-md ml-2 p-2 flex gap-4 hover:bg-gray-100"
const Sidebar = ({icons,title}) => {
  return (
    <div>
        <div className={className}>
            {icons}
            <h2>{title}</h2>
        </div>
    </div>
  )
}
export default Sidebar