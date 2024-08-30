import React from 'react'
import NavButton from './NavButton'

const NavBar = () => {
  return (
    <div className='fixed top-0 w-full h-12 bg-white z-10'>
      <div className='flex items-center justify-between h-full'>
        <div></div>
        <NavButton href="/" text="HOME" />
        <NavButton subLinks={[
          { text: "INSTAGRAM STORY", href: "/work/instagram-story" },
          { text: "SWIMLANE", href: "/work/swimlane" },
          { text: "BEFRAGUNGSTOOL", href: "/work/befragungstool" },
          { text: "MASCOT", href: "/work/mascot" },
        ]} href="/work" text="WORK" />
        <NavButton href="/about" text="ABOUT" />
        <div></div>
      </div>
    </div>
  )
}

export default NavBar
