import {
  Box,
  List,
  ListItem,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { cartItems } from '../cartSelector';
import CartListItem from './CartListItem';

function CartList(props) {
  const cartList = useSelector(cartItems);
  return (
    <Box>
      <List>
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
