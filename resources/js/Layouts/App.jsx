import React from 'react'
import Navbar from './Navbar'

export default function App({children}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}
