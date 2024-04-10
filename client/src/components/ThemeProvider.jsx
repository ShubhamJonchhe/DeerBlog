import React from 'react'
import { useSelector } from 'react-redux'

export default function ThemeProvider({ children }) {
    const {theme} = useSelector(state => state.theme)
  return (
    <div>
        <div className={theme}>
        <div className='bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(26,23,42)] min-h-screen'>
            {children}
        </div>
    </div>
    </div>
  )
}