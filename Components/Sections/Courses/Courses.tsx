import { SectionTitle } from '@/Components/Titles/SectionTitle'
import { CoursesData } from '@/Constants'
import { Arrow_rounded, ColoredLight } from '@/public'
import React from 'react'
import { CourseComponent } from './CourseComponent'

export const Courses = () => {
  return (
    <section className='mt-20 relative'>
        <SectionTitle subTitle='Lorem Ipsum is simply dummy text of the printing.' >Our Tracks</SectionTitle>
        
        <div className='xs:w-11/12 w-full mx-auto mt-10 
        flex justify-center flex-wrap gap-10'>
        {
          CoursesData.map(Course=>(
            <CourseComponent key={Course.title} {...Course} />
            ))
          }
        </div>
        <div className='absolute sm:block hidden right-0 top-0'>
          <Arrow_rounded/>
        </div>
        <div className='absolute sm:block hidden left-4 top-0'>
          <ColoredLight/>
        </div>
      
  

    </section>
  )
}
