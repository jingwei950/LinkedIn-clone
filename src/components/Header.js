import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleIcon from '@mui/icons-material/People';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { logout } from "../features/userSlice"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
      <div className="header_left">
        
        {/*If there's user show "In" icon, if not show "LinkedIn"*/
          user ? 
          <div className="header_svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" color="#0967C3" viewBox="0 0 34 34" class="global-nav__logo">
              <title>
                LinkedIn
              </title>
              <g>
                <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
              </g>
            </svg>
          </div>
          : 
          <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itokwq_lR0Vks" alt="" /> 
        }

        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header_right">
        {user ? <>
          <HeaderOption Icon={HomeIcon} title={"Home"} />
          <HeaderOption Icon={SupervisorAccountIcon} title={"My network"} />
          <HeaderOption Icon={BusinessCenterIcon} title={"Job"} />
          <HeaderOption Icon={MessageIcon} title={"Messaging"} />
          <HeaderOption Icon={NotificationsIcon} title={"Notifications"} />
          <HeaderOption avatar={true} onClick={logoutOfApp} title={"Me"} />
        </>
        :

        <>
          <HeaderOption Icon={ExploreIcon} title={"Discover"} />
          <HeaderOption Icon={PeopleIcon} title={"People"} />
          <HeaderOption Icon={OndemandVideoIcon} title={"Learning"} />
          <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"} />
        </>
        }
        
      </div>
    </div>
  )
}

export default Header