import {
  Box,
  Button,
  Paper,
  Typography,
  Dialog,
} from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils';
import { totalCartPrice } from './cartSelector';
import CartForm from './components/CartForm';
import CartList from './components/CartList';

function Cart(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOrderClick = () => {
    setOpen(true);
  };
  const currentTotalCart = useSelector(
    totalCartPrice
  );
  return (
    <Box sx={{ marginTop: '2vh' }}>
      <Dialog open={open} onClose={handleClose}>
        <CartForm handleClose={handleClose} />
      </Dialog>
      <Paper elevation={0}>
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          color="primary"
        >
          Cart List
        </Typography>
        <CartList />

        <Typography
          variant="h6"
          align="center"
          gutterBottom
          color="primary"
        >
          Total:{' '}
          {formatCurrency(currentTotalCart)}
        </Typography>
        <Button
          onClick={handleOrderClick}
          fullWidth
          variant="contained"
        >
          Complete Order
        </Button>
      </Paper>
    </Box>
  );
}

export default Cart;
