import React from 'react';
import './HeaderOption.css';
import {Avatar} from "@mui/material"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function HeaderOption({ avatar, Icon, title, onClick}) {
  const user = useSelector(selectUser)


  return (
    <div onClick={onClick} className='headerOption'>
        {/* If there is a component then render itself as a component */}
        {Icon && <Icon className="headerOption_icon" />}
        {avatar && <Avatar className="headerOption_icon" src={user?.photoUrl}>
          {/*Is there any user? If there is user then use user's email first letter as avatar icon as default else return*/}
          {user?.email[0].toUpperCase()} 
        </Avatar>}
        <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption