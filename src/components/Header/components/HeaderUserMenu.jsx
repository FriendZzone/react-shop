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
  const handleCartClick = () => {
    setAnchorEl(null);
    navigate('/cart');
  };
  const handleProfileClick = () => {
    setAnchorEl(null);
    navigate('/profile');
  };
  const handleLogoutClick = () => {
    dispatch(logout());
  };
  return (
    <Box sx={{ marginLeft: '10px' }}>
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
        <MenuItem onClick={handleCartClick}>
          My Cart
        </MenuItem>
        <MenuItem onClick={handleProfileClick}>
          Profile
        </MenuItem>
        <MenuItem
          color="primary"
          onClick={handleLogoutClick}
        >
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default HeaderUserMenu;
