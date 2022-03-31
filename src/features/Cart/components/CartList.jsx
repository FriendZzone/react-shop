import {
  Box,
  Button,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { cartItems } from '../cartSelector';
import CartListItem from './CartListItem';
import { useNavigate } from 'react-router-dom';

function CartList(props) {
  const cartList = useSelector(cartItems);
  const navigate = useNavigate();
  return (
    <Box>
      <List>
        {!cartList[0] && (
          <ListItem>
            <Typography>
              There's no item!
            </Typography>
            <Button
              onClick={() =>
                navigate('/products')
              }
            >
              Go back to shop
            </Button>
          </ListItem>
        )}
        {cartList.map((item, index) => (
          <ListItem key={index}>
            <CartListItem product={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default CartList;
