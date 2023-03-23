import React from 'react'

interface Props{
  children:React.ReactNode
  subTitle:string
}

export const SectionTitle = ({children,subTitle}:Props) => {
  return (
    <div className='mx-auto w-full flex justify-center flex-col items-center'>
      <h1 className='text-[40px] md:text-[35px] sm:text-[30px] text-center  text-[#050C26] font-semibold tracking-[0.02em]'>
          {children}
      </h1>
      <p className='text-[#8A8A8A] md:text-[20px] sm:text-[15px] text-[14px] text-center'>
        {subTitle}
      </p>
    </div>
  )
}
