import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogTitle,
  Fade,
  Rating,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { formatCurrency } from '../../../../utils';
import CardInfo from './CardInfo';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
    position: 'relative',
    transition: 'all .4s',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: `0px 4px 0px 0px ${theme.palette.primary.main}`,
    },
  },
  box: {
    height: '200px',
  },
  image: {
    maxHeight: '200px',
    objectFit: 'contain',
    width: '100%',
  },
  cardInfo: {
    minWidth: '30%',
  },
  button: {
    marginLeft: 'auto',
  },
  rating: {
    fontSize: '16px',
  },
  bottomBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
function ListItemCard({ product }) {
  const classes = useStyles();
  const [openQuickLook, setOpenQuickLook] =
    useState(false);

  const handleClickQuickLook = () => {
    setOpenQuickLook((prev) => !prev);
  };
  return (
    <Box className={classes.root}>
      {openQuickLook && (
        <CardInfo product={product} />
      )}

      <Box className={classes.box}>
        <img
          className={classes.image}
          alt="123"
          src={product.image}
        />
      </Box>
      <Box className={classes.cardInfo}>
        <Typography
          noWrap
          rows={2}
          variant="subtitle2"
        >
          {product.title}
        </Typography>
        <Typography color="secondary">
          {formatCurrency(product.price)}
        </Typography>
        <Box className={classes.bottomBox}>
          <Rating
            className={classes.rating}
            name="read-only"
            value={product.rating.rate}
            readOnly
          />
          <Button
            className={classes.button}
            variant="outlined"
            align="right"
            size="small"
            onClick={handleClickQuickLook}
            sx={{ fontSize: '10px' }}
          >
            {openQuickLook
              ? 'Hide'
              : 'Quick Look'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ListItemCard;
