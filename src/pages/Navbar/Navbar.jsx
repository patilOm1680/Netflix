import React, { useContext } from 'react'
import logo from "../../assets/Home/logo.png"
import { NavLink, useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import "./Navbar.css"
import UserContext from '../../context/UserContext';
import SearchBar from '../../components/SearchBar/SearchBar';
// import { ToastContainer, toast } from 'react-toastify';
import subscriptionIcon from "../../assets/Home/subscriptionIcon.png"
const Navbar = () => {
  const { setIsLogin } = useContext(UserContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate('/')
  const handleLogout = () => {
    localStorage.clear();
    setIsLogin("false");
    navigate('/')
  }

  const handleLogoClick = () => {
    navigate('/')
  }
  const handleProfile = () => {
    navigate('/profile')
  }

  const handleSubscription = () => {
    navigate("/subscription")
  }
  
  


  return (
    <div className='z-50 fixed bg-black w-full'>
      <div className='mx-16 mt-2 flex items-center gap-[810px] px-1 text-white'>
        {/* left side  */}
        <div className='flex items-center'>
          <nav className='navbar'>
            <ul className='flex items-center gap-6 font-bold text-[22px]'>
              <li>
                <img className='w-[158px] mt-2 cursor-pointer' src={logo} alt="" onClick={handleLogoClick} />
              </li>
              <li>
                <NavLink to="/" exact className="nav-link">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shows" exact className="nav-link">TV Shows</NavLink>
              </li>
              <li>
                <NavLink to="/movies" exact className="nav-link">Movies</NavLink>
              </li>
              <li>
                <NavLink to="/my-list" exact className="nav-link">My List</NavLink>
              </li>
            </ul>
          </nav>



        </div>

        {/* right side  */}
        <div>
          <ul className='flex items-center gap-6'>
            <li><SearchBar/></li>
            <li><i class="fa-solid fa-bell fa-lg"></i></li>
            <li>
              {/* profile  */}
              {/* <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}> */}
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar variant="square" sx={{ width: 32, height: 32 }}>
                    <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt="" />
                  </Avatar>
                </IconButton>
              </Tooltip>
              {/* </Box> */}
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleProfile}>
                  <Avatar variant="square" sx={{ width: 24, height: 24 }}>
                    <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt="" />
                  </Avatar> Profile
                </MenuItem>
                <MenuItem onClick={handleSubscription}>
                  <Avatar variant="square" sx={{ width: 24, height: 24,backgroundColor:'white',color:"white" }}>
                    <img src={subscriptionIcon} alt="" />
                  </Avatar> Subscription
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </li>
          </ul>

        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>

  )
}

export default Navbar
