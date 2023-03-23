import { MainButton } from '@/Components/Buttons/MainButton'
import useMediaQuery from '@/Hooks/UseMediaQuery'
import { Close, Hamburger } from '@/public'
import styles from '@/styles'
import React from 'react'
import { NavLink } from './NavLink'
import { SmallScreensNavLink } from './SmallScreensNavLink'

export const Navbar = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1024px)');
  const [Menu,setMenu] = React.useState<boolean>(false)

 
  return (
    <React.Fragment>

    <nav className={`max-w-[1920px] bg-bodyBg   px-6 fixed left-0 right-0 py-4 z-40 mx-auto`}>
      <div className={`flex justify-between items-center w-11/12 mx-auto `}>
          <div className='md:w-[8rem] w-[7rem]'>
              <img src="./Images/Navbar/LogoFull.webp" className='w-full' alt="" />
          </div>
          { isAboveMediumScreens ?

            <div className='flex gap-8 items-center justify-between'>
            <div className='flex items-center gap-5'>

              <NavLink>Home</NavLink>
              <NavLink>About us</NavLink>
              <NavLink>Courses</NavLink>
              <NavLink>Our Service</NavLink>
              <NavLink>Contact Us</NavLink>
            </div>

               
            <MainButton color='blue'  size='md'>Sign In</MainButton>
            
          </div>
          :
          <div onClick={()=>{setMenu(true)}}>
            <Hamburger />
          </div>
          }
      </div>
    </nav>

    {!isAboveMediumScreens && Menu &&
    (
      <div className=' flex flex-col  xs:w-[350px] w-full fixed right-0 h-full top-0 bg-primary z-[99]'>
          <div className='ml-auto my-6 mr-10' onClick={()=>{setMenu(false)}}>
            <Close/>
          </div>
          <div className={`${styles.flexCenter} gap-4 flex-col my-32 mx-4`} >
              <SmallScreensNavLink>Home</SmallScreensNavLink>
              <SmallScreensNavLink>About us</SmallScreensNavLink>
              <SmallScreensNavLink>Courses</SmallScreensNavLink>
              <SmallScreensNavLink>Our Service</SmallScreensNavLink>
              <SmallScreensNavLink>Contact Us</SmallScreensNavLink>
              
              <div className="mt-10">
                <MainButton color='white' size='lg'>Sign In</MainButton>
              </div>
          </div>
      </div>
    )}
    </React.Fragment>
  )
}
