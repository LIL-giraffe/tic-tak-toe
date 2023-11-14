import React from 'react'

const Square = ({value, click}) => {
  return (
    <div className=' border border-solid border-black h-[100px] w-[100px] flex justify-center items-center cursor-pointer' onClick={click}>
      <h1>{value}</h1>
    </div>
  )
}

export default Square