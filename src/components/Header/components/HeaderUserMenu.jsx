import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../features/Authentication/userSlice';
function HeaderUserMenu(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogoutClick = () => {
    dispatch(logout());
    console.log('logout');
    setAnchorEl(null);
    navigate('/');
  };
  return (
    <Box>
      <IconButton
        onClick={handleClick}
        color="inherit"
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          My account
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default HeaderUserMenu;
