import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { formatCurrency } from '../../../utils';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ccc',
    alignItems: 'center',
  },
  imageBox: {},
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
  },
  title: {
    display: 'flex',
    flex: '1',
    minWidth: '30%',
    overflow: 'hidden',
  },
  name: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
function HeaderCartMenuItem({ item }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Box className={classes.imageBox}>
          <img
            className={classes.image}
            src={item.image}
            alt={item.title}
          />
        </Box>
        <Box className={classes.name}>
          <Typography
            variant="body2"
            color="secondary"
            fullWidth
            noWrap
            className={classes.typo}
          >
            {item.title}
          </Typography>
          <Typography
            noWrap
            variant="body2"
            className={classes.typo}
          >
            Option: {item.option}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.info}>
        <Typography variant="body2">
          x{item.quantity}
        </Typography>

        <Typography variant="body2">
          {formatCurrency(
            item.quantity * item.price
          )}
        </Typography>
      </Box>
    </Box>
  );
}

export default HeaderCartMenuItem;
