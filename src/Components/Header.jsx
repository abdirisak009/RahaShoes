import React from 'react'
import Navbar from './Navbar'
import HeaderText from './HeaderText'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('./banner.jpg')"}} id='Header'>
       
      <HeaderText/>
    </div>
  )
}

export default Header