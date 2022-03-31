import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderUserMenu from './components/HeaderUserMenu';
import HeaderCartMenu from './components/HeaderCartMenu';
import { useSelector } from 'react-redux';
import { isLogged } from '../../features/Authentication/userSelectors';
function Header() {
  const navigate = useNavigate();
  const loginStatus = useSelector(isLogged);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
            onClick={() => navigate('/')}
          >
            <ShoppingBagIcon />
          </IconButton>
          <Typography
            onClick={() => navigate('/')}
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
          <HeaderCartMenu />
          {loginStatus ? (
            <HeaderUserMenu />
          ) : (
            <Button
              onClick={() =>
                navigate('register', {
                  state: {
                    loginOption: true,
                  },
                })
              }
              color="inherit"
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
