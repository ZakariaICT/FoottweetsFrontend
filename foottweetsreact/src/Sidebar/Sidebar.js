import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Sidebar.css";
import SideBarOption from './SideBarOption';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import MyIcon from './MyIcon.svg'
import HomeIcon from "./HomeIcon.svg"
import UserIcon from "./UserIcon.svg"
import MessagesIcon from "./MessagesIcon.svg"


const Sidebar = () => {
  return (
    <div className='sidebar'>

        <h1> Hello Twitter </h1>
        <img src={MyIcon} alt="My Icon" />
        <SideBarOption active src={HomeIcon} text= "Home" />
        <SideBarOption src={MessagesIcon} text= "Messages" />
        <SideBarOption src={UserIcon} text= "Profile" />

        <button className='sideBarTweet'> Tweet </button>
    </div>
  )
}

export default Sidebar