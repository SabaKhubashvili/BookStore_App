import { Download, StarEmpty, StarFull, Time, Video } from '@/public'
import React from 'react'

interface Props{
    image:string
    type:string
    title:string
    price:number
    CourseInfo:{
        time:string
        courses:number
        sales:number
    },
    Stars:boolean[]
}

export const CourseComponent = ({
    image,
    type,
    title,
    price,
    CourseInfo,
    Stars}:Props) => {
        
        
  return (
    <div className='p-3 bg-white shadow-Courses rounded-lg relative md:basis-auto w-[32rem]'>
        <div className='w-full md:max-w-[32rem] '>
            <img src={`../Images/Courses/${image}`} className='rounded-xl w-full' alt="" />
        </div>
        <div className='flex justify-between mt-4'>
            {/* Type And Stars */}
            <div className='text-[#ACACAC] text-[14px]'>
                {type}
            </div>
            <div className='flex gap-0.5'>
               {
                Stars.map((star,index)=>{
                    if(star){
                        return(
                            <StarFull key={index} />
                        )
                    }else{
                        return(
                            <StarEmpty key={index}/>
                        )
                    }
                })
               }
            </div>
        </div>

        {/* Title */}
        <h3 className='text-[16px] text-normal'>{title}</h3>
        {/* Price */}
        <h3 className='text-[#FF7426] font-semibold pb-3'>${price}</h3>
        
        <div className='pt-3 pb-4 border-t-2 border-t-[#ACACAC] border-dashed
        flex justify-start items-center gap-3 text-[#ACACAC] sm:text-[13px] text-[12px]'>
            <div className='flex items-center gap-1'>
                <Time/>
                {CourseInfo.time}
            </div>
            <div className='flex items-center gap-1'>
                <Video/>
                {CourseInfo.courses} Courses
            </div>
            <div className='flex items-center gap-1'>
                <Download/>
                {CourseInfo.sales} Sales
            </div>
        </div>
        <div className='mx-auto md:-mb-8 md:w-[9rem] cursor-pointer text-center px-2 rounded-full md:py-2 sm:py-4 py-3 text-white bg-[#FF7426] '>
               Join Course
        </div>
    </div>
  )
}
