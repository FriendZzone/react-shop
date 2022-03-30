import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Button,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import Badge from '@mui/material/Badge';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  cartItems,
  cartTotalItems,
} from '../../../features/Cart/cartSelector';
import HeaderCartMenuItem from './HeaderCartMenuItem';

function HeaderCartMenu(props) {
  const navigate = useNavigate();
  const currentTotalCartItem = useSelector(
    cartTotalItems
  );

  const currentCartItems = useSelector(cartItems);
  const [anchorEl, setAnchorEl] =
    React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Badge
        badgeContent={currentTotalCartItem}
        color="primary"
        onClick={handleClick}
      >
        <ShoppingCartIcon />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          height: '50vh',
        }}
      >
        {!currentTotalCartItem ? (
          <MenuItem>
            <Typography variant="body2">
              Empty
            </Typography>
          </MenuItem>
        ) : (
          <div>
            <MenuItem>
              <Button
                fullWidth
                onClick={() => {
                  navigate('/cart');
                  handleClose();
                }}
                variant="contained"
                endIcon={<ShoppingCartIcon />}
              >
                Go to cart
              </Button>
            </MenuItem>
            {currentCartItems.map(
              (item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleClose();
                    navigate(
                      `/products/${item.id}`
                    );
                  }}
                  sx={{ width: '100%' }}
                >
                  <HeaderCartMenuItem
                    item={item}
                  />
                </MenuItem>
              )
            )}
          </div>
        )}
      </Menu>
    </div>
  );
}

export default HeaderCartMenu;
