import React from 'react'

interface Props{
    children:React.ReactNode
}

export const NavLink = ({children}:Props) => {
  return (
    <div className=' font-semibold cursor-pointer'>
        {children}
    </div>
  )
}
