import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Box,
  Card,
  Rating,
  Typography,
} from '@mui/material';
import React from 'react';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
  },
  box: {
    height: '200px',
  },
  image: {
    maxHeight: '200px',
    objectFit: 'contain',
    width: '100%',
  },
}));
function ListItemCard({ product }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.box}>
        <img
          className={classes.image}
          alt="123"
          src={product.image}
        />
      </Box>
      <Typography variant="subtitle2">
        {product.title}
      </Typography>
      <Typography color="secondary">
        ${product.price}
      </Typography>
      <Rating
        name="read-only"
        value={product.rating.rate}
        readOnly
      />
    </Box>
  );
}

export default ListItemCard;
