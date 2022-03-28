import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useNavigate } from 'react-router-dom';
import Authentication from '../../features/Authentication';
function Header({ open, setOpen }) {
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate('/')}
          >
            <ShoppingBagIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            React Shop
          </Typography>
          <Button
            color="inherit"
            onClick={() => navigate('products')}
          >
            Products
          </Button>

          <Button
            onClick={handleClickOpen}
            color="inherit"
          >
            Login
          </Button>
          <Authentication
            open={open}
            handleClose={handleClose}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
