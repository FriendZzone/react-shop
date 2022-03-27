import {
  Avatar,
  Box,
  Card,
  Grid,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { formatToUpperFirstCase } from '../../../../utils';
const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: '4%',
  },
  leftBox: {
    width: '100%',
  },
  rightBox: {
    marginLeft: '5%',
  },
  avatar: {
    margin: '0 auto',
    height: '60px',
    width: '60px',
  },
}));
function ItemSeller({ seller, image }) {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Box className={classes.leftBox}>
            <Typography
              color="primary"
              align="center"
            >
              Seller
            </Typography>
            <Avatar
              className={classes.avatar}
              src={image.img}
            />
            <Typography
              variant="subtitle1"
              align="center"
            >
              {formatToUpperFirstCase(
                seller.name.firstname
              )}{' '}
              {formatToUpperFirstCase(
                seller.name.lastname
              )}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box className={classes.rightBox}>
            <Typography
              variant="body2"
              gutterBottom
            >
              Address :
              <Typography
                component="span"
                variant="body2"
              >
                {` ${
                  seller.address.number || ''
                } ${formatToUpperFirstCase(
                  seller.address.street
                )} - ${formatToUpperFirstCase(
                  seller.address.city
                )}`}
              </Typography>
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
            >
              Phone :
              <Typography
                component="span"
                variant="body2"
              >
                {' '}
                {seller.phone}
              </Typography>
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
            >
              Zip code :
              <Typography
                component="span"
                variant="body2"
              >
                {' '}
                {seller.address.zipcode}
              </Typography>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ItemSeller;
