import styles from '@/styles'
import React from 'react'

export const Footer = () => {
  return (
    <footer className={`${styles.innerWidth} relative py-5 bottom-0 mx-auto mt-20`}>
        <div className='flex md:flex-row flex-col justify-between gap-20 mb-8'>

        <div className='basis-1/4'>
            <img src="./Images/Navbar/LogoFull.webp" alt="" />
            <p className='mt-5 text-[#606060]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy a type specimen book.</p>
        </div>
        <div className='basis-1/4'>
            <h3>Company</h3>
            <ul className='text-[#606060] flex flex-col gap-2 mt-4'>
                <li>About Us</li>
                <li>How to work</li>
                <li>Populer Course</li>
                <li>Serice</li>
            </ul>
        </div>
        <div className='basis-1/4'>
            <h3>Company</h3>
            <ul className='text-[#606060] flex flex-col gap-2 mt-4'>
                <li>About Us</li>
                <li>How to work</li>
                <li>Populer Course</li>
                <li>Serice</li>
            </ul>
        </div>
        <div className='basis-1/4'>
            <h3>Contac Info</h3>
            <ul className='text-[#606060] flex flex-col gap-5 mt-4'>
                <li>+0913-705-3875</li>
                <li>ElizabethJ@jourrapide.com</li>
                <li>4808 Skinner Hollow Road Days Creek, OR 97429</li>
            </ul>
        </div>
        </div>
        <div className='my-3 border-t-2 py-3 text-[#606060] border-t-[#B7B7B7] border-solid text-center'>
        BookStore All Right Reserved, 2022
        </div>
    </footer>
  )
}
