import { Grid } from '@material-ui/core';
import { Skeleton } from '@mui/material';
import {
  Box,
  Divider,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
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
function ProductsListSkeleton({ length }) {
  const classes = useStyles();

  return (
    <Grid container>
      {Array.from(new Array(length)).map(
        (item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Box className={classes.root}>
              <Skeleton
                className={classes.box}
                variant="rectangular"
              />
              <Box className={classes.cardInfo}>
                <Typography
                  noWrap
                  rows={2}
                  variant="subtitle2"
                >
                  <Skeleton variant="text" />
                </Typography>
                <Typography color="secondary">
                  <Skeleton variant="text" />
                </Typography>
                <Box
                  className={classes.bottomBox}
                >
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                </Box>
              </Box>
              <Divider />
            </Box>
          </Grid>
        )
      )}
    </Grid>
  );
}

export default ProductsListSkeleton;
