import React from 'react'
import { SubBannerComponents } from './SubBannerComponents'
import { SubBannerComponentsData } from '@/Constants'

export const SubBanner = () => {
  return (
    <section className='max-w-[1600px] md:h-[8rem] bg-primary md:rounded-xl flex md:w-10/12 mx-auto md:flex-row flex-col   '>

        {SubBannerComponentsData.map(Comp =>(
           <SubBannerComponents 
           key={Comp.title}
           title={Comp.title}
           description={Comp.description} 
           image={Comp.image} />
        ))}
       

    </section>
  )
}
