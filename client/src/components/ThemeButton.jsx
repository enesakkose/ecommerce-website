import React from 'react'
import './ThemeButton.scss'
import { useSite } from '../context/SiteContext'

function ThemeButton() {

    const { theme, setTheme } = useSite()
    const changeTheme = () => {
        setTheme(!theme)
    }
  return (
    <button onClick={changeTheme} className='themeBtn'>
        <div className={`themeBtn__switch ${theme ? 'active' : ''}`}>
        </div>
    </button>
  )
}

export default ThemeButton