import React from 'react'

interface Props{
    children:React.ReactNode
}

export const SmallScreensNavLink = ({children}:Props) => {
  return (
    <div className='text-white text-2xl'>
        {children}
    </div>
  )
}
