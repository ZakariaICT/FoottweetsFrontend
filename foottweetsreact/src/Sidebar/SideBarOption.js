import React from 'react'
import "./SideBarOption.css"

const SideBarOption = ({ active, text, src}) => {
  return (
        <div className={`sideBarOption ${active && 'sideBarOption--active'}`}>
        <img className='picture' src={src} alt="My Icon" />
        <h2> {text} </h2>
    </div>
  )
}

export default SideBarOption