import { SectionTitle } from '@/Components/Titles/SectionTitle'
import { TracksData } from '@/Constants'
import React from 'react'
import { Track } from './Track'

export const Tracks = () => {
  return (
    <section className='mt-20'>
        <SectionTitle subTitle='Lorem Ipsum is simply dummy text of the printing.'>Our Tracks</SectionTitle>

        <div className='mt-10 flex flex-wrap w-11/12 mx-auto justify-center gap-4'>
            {
                TracksData.map(singleTrack=>(
                    <Track key={singleTrack.name} {...singleTrack} />
                ))
            }
        </div>
    </section>
  )
}
