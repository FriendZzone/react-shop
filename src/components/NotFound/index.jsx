import { Box, Typography } from '@mui/material';
import React from 'react';

function NotFound(props) {
  return (
    <Box fullWidth paddingTop={10}>
      <Typography variant="h5" color="primary">
        Oops!! Page not found
      </Typography>
      <img
        style={{
          margin: '0 10%',
          objectFit: 'contain',
        }}
        src="https://cdn.iconscout.com/icon/free/png-256/page-not-found-5-530376.png"
        alt="not found"
      />
    </Box>
  );
}

export default NotFound;
