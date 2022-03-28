import {
  Box,
  Button,
  Divider,
  Rating,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../../../../utils';
import CardInfo from './CardInfo';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
    position: 'relative',
    transition: 'all .4s',
    marginTop: '5%',
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
    zIndex: 100,
  },
  rating: {
    fontSize: '16px',
  },
  bottomBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '3%',
  },
}));
function ListItemCard({ product }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [openQuickView, setOpenQuickView] =
    useState(false);

  const handleClickQuickView = () => {
    setOpenQuickView((prev) => !prev);
  };

  return (
    <Box className={classes.root}>
      {openQuickView && (
        <CardInfo product={product} />
      )}

      <Box
        className={classes.box}
        onClick={() =>
          navigate(`/products/${product.id}`)
        }
      >
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
            variant={
              openQuickView
                ? 'contained'
                : 'outlined'
            }
            align="right"
            size="small"
            onClick={handleClickQuickView}
            sx={{ fontSize: '10px' }}
          >
            {openQuickView
              ? 'Hide'
              : 'Quick View'}
          </Button>
        </Box>
      </Box>

      <Button
        fullWidth
        size="small"
        variant="contained"
        onClick={() => {
          navigate(`/products/${product.id}`, {
            state: product,
          });

          window.scrollTo(0, 0);
        }}
      >
        Buy
      </Button>

      <Divider />
    </Box>
  );
}

export default ListItemCard;
