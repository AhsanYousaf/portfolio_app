import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'


function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/ahsenyousaf' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com/AhsanYousaf' target='_blank'><FaGithub /></a>
      <a href='https://www.instagram.com/ahsanbhatti1998/' target='_blank'><FiInstagram /></a>
    </div>
  )
}

export default HeaderSocials
