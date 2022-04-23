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
          user ? <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1650541354~hmac=15040b07124146c632ea3f929e100308" alt="" />
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