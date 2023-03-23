import { Arrow_rounded_orange, Ball, Ball2, Ball3, Ball4, ColoredLight } from '@/public'
import styles from '@/styles'
import React from 'react'


export const NewsLetter = () => {
  return (
    <section className={`max-w-[1600px] h-[20rem]  mt-20 sm:w-10/12 mx-auto bg-primary md:rounded-xl relative z-50
    ${styles.flexCenter} flex-col`}>
        <div className='inline text-center'>

       <h2 className="text-[40px] text-center text-white font-semibold">Subscribe to our newsletter</h2>
       <p className='text-white'>Lorem Ipsum is simply dummy text of the printing.</p>

       <form className="relative mt-8 flex ">
          <input
            type="text"
            placeholder="Search For Location..."
            className="py-3 px-10 w-full xs:rounded-full relative outline-none h-[4rem]"
            name="location"
            />

          <div className="absolute top-2 right-2">
        <button className={` rounded-full bg-[#FF7426] md:px-14 px-6 py-3 text-white`}>
            Send
        </button>
          </div>
        </form>


        </div>
        <div className="absolute right-10 bottom-0  md:inline hidden">
            <ColoredLight/>
        </div>
        <div className="absolute left-40 -bottom-8 md:inline hidden">
            <Arrow_rounded_orange/>
        </div>
        <div className="absolute top-0 left-10  md:inline hidden">
            <Ball/>
        </div>
        <div className="absolute left-0 top-0 md:inline hidden">
            <Ball2/>
        </div>
        <div className="absolute right-0 top-0 md:inline hidden">
            <Ball3/>
        </div>
        <div className="absolute right-0 top-0 md:inline hidden">
            <Ball4/>
        </div>
        
      
    </section>
  )
}
