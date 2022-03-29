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
function Header() {
  const navigate = useNavigate();
  const loginStatus = JSON.parse(
    localStorage.getItem('loginReactShop')
  );

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
