import React from 'react'

function Task({ value }) {
  return (
    <>
    <div className='border border-1 border-[#3c3f59] p-2 rounded-md bg-[#181b35] text-white cursor-pointer'>
        {value}
    </div>
    </>
  )
}

export default Task