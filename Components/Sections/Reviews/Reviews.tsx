import { SectionTitle } from '@/Components/Titles/SectionTitle'
import { ReviewsData } from '@/Constants'
import { Arrow_rounded, Planet } from '@/public'

import React from 'react'
import { Review } from './Review'



export const Reviews = () => {
  return (
    <section className='mt-28 relative'>
        <SectionTitle subTitle='Lorem Ipsum is simply dummy text of the printing.' >What student’s say</SectionTitle>

        <div className='flex md:flex-nowrap flex-wrap justify-center gap-4 mt-10 xs:w-10/12 w-11/12  mx-auto '>

        {
          ReviewsData.map(SingleReview=>(
            <Review key={SingleReview.name} {...SingleReview} />
            ))
          }
        </div>

        <div className="absolute md:block hidden left-0 -bottom-36 rotate-180">
        <Arrow_rounded/>
      </div>
      <div className="absolute right-10 md:block hidden -bottom-20 -z-10">
        <Planet/>
      </div>
    </section>  
  )
}
