import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { formatCurrency } from '../../../utils';
import { removeFromCart } from '../cartSlice';
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
    minWidth: '60%',
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
        <Typography variant="h6" noWrap>
          {product.title}
        </Typography>
        <Typography variant="h6" noWrap>
          {product.option}
        </Typography>
      </Box>
      <Box>
        <Typography align="center">
          x{product.quantity}
        </Typography>
        <Typography>
          {formatCurrency(
            product.quantity * product.price
          )}
        </Typography>
        <Button
          size="small"
          onClick={handleDeleteClick}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}

export default CartListItem;
