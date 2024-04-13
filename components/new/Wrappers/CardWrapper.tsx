import React from 'react'

const CardWrapper = ({children}: any) => {
  return (
    <div className='p-5 mt-12 mb-20 bg-gray-800 rounded-lg bg-opacity-40 justify-self-center'>
      {children}
    </div>
  )
}

export default CardWrapper
