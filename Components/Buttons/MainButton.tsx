import React from 'react'

interface Props{
    children:React.ReactNode
    color:string
    size:string
}

export const MainButton = ({children,color,size}:Props) => {
  return (
    <button className={` ${color == 'white' ? 'bg-white text-primary' : 'text-white bg-primary'} 
    ${size == 'lg' ? 'px-14 py-4' : ' sm:px-10 px-6 py-2'} rounded-full`}>
        {children}
    </button>
  )
}
