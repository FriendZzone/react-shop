import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import HomeMenu from './components/HomeMenu';
import ImageMasonry from './components/ImageMasonry';

function HomePage(props) {
  return (
    <div>
      <Typography
        variant="h4"
        color="primary"
        padding={2}
      >
        Welcome to React Shop !
      </Typography>
      <Box
        sx={{ display: 'flex', flexWrap: 'wrap' }}
      >
        <HomeMenu />
        <ImageMasonry />
      </Box>
    </div>
  );
}

export default HomePage;
