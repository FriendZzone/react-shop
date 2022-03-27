import {
  Box,
  Rating,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import './style.css';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    animation: 'fadeIn .5s',
    width: '90%',
    maxHeight: '80%',
    transition: 'all .3s',
    overflowY: 'auto',
    paddingBottom: '12px',
    borderRadius: '5px',
    backgroundColor: theme.palette.common.white,
  },
  title: {
    backgroundColor: theme.palette.primary.light,
  },
  information: {
    backgroundColor: theme.palette.common.white,
    margin: '0 10px',
  },
}));
function CardInfo({ product }) {
  const classes = useStyles();
  console.log(product);
  return (
    <Box className={classes.root}>
      <Typography
        color="white"
        fontWeight="bold"
        align="center"
        variant="subtitle2"
        className={classes.title}
      >
        Quick look :
      </Typography>
      <Box className={classes.information}>
        <Typography variant="h6" gutterBottom>
          {product.title}
        </Typography>
        <Rating
          name="read-only"
          value={product.rating.rate}
          readOnly
        />
        <Typography variant="body1" gutterBottom>
          rate: {product.rating.rate}
        </Typography>
        <Typography
          color="secondary"
          variant="body1"
          gutterBottom
        >
          Sold: {product.rating.count}
        </Typography>
        <Typography variant="body2">
          Description : {product.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default CardInfo;
