import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__logo'>
            <span>Marvel</span> information portal
          </div>
          <ul className='menu'>
            <li className='menu__element'>
              <NavLink to='/characters' className='link'>
                Characters
              </NavLink>
            </li>
            <li className='menu__element'> / </li>
            <li className='menu__element'>
              <NavLink to='/comics' className='link'>
                Comics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
