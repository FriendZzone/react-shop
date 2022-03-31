import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { formatCurrency } from '../../../utils';
import {
  changeItemQuantity,
  removeFromCart,
} from '../cartSlice';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

    // width: '60%',
    maxWidth: '90%',
    minWidth: '90%',

    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
    borderBottom: '1px solid #ccc',
  },
  imageBox: {
    width: '100px',
    paddingRight: '10px',
  },
  image: {
    maxHeight: '100px',
    objectFit: 'contain',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '35%',
    flex: '1',
  },
}));
function CartListItem({ product }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleDeleteClick = () => {
    dispatch(
      removeFromCart({
        id: product.id,
        option: product.option,
      })
    );
  };
  const handleIncreaseItemClick = () => {
    dispatch(
      changeItemQuantity({
        id: product.id,
        option: product.option,
        quantity: product.quantity + 1,
      })
    );
  };
  const handleDecreaseItemClick = () => {
    dispatch(
      changeItemQuantity({
        id: product.id,
        option: product.option,
        quantity: product.quantity - 1,
      })
    );
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.imageBox}>
        <img
          className={classes.image}
          width="100%"
          src={product.image}
          alt={product.title}
        />
      </Box>
      <Box className={classes.title}>
        <Typography
          variant="body1"
          fontWeight="bold"
          noWrap
        >
          {product.title}
        </Typography>
        <Typography variant="body1" noWrap>
          {product.option}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ display: 'flex' }}
          align="center"
        >
          <Button
            onClick={handleDecreaseItemClick}
            size="small"
            disabled={product.quantity === 1}
          >
            <RemoveCircleIcon />
          </Button>
          x{product.quantity}
          <Button
            onClick={handleIncreaseItemClick}
            size="small"
          >
            <AddCircleIcon />
          </Button>
        </Typography>
        <Typography align="center">
          {formatCurrency(
            product.quantity * product.price
          )}
        </Typography>
        <Button
          size="small"
          fullWidth
          onClick={handleDeleteClick}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}

export default CartListItem;
