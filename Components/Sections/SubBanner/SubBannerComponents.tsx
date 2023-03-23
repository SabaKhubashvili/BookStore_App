import React from 'react'

interface Props{
    title:string
    description:string
    image:string
}

export const SubBannerComponents = ({title,description,image}:Props) => {
  return (
    <div className='flex xxs:flex-row flex-col  gap-3 items-center px-6 py-7'>
      <div className='min-w-[3rem] w-[5rem]'>
        <img src={`${image}`} className='w-full' alt="" />
      </div>
      <div className=''>
         <h3 className='text-white font-bold'>{title}</h3>
         <p className='text-[12px] text-white opacity-60'>{description}</p>
      </div>
    </div>
  )
}
