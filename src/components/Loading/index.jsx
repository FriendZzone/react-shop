import {
  Box,
  CircularProgress,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
});
function Loading(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CircularProgress size={80} />
    </Box>
  );
}

export default Loading;
