import {
  Box,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import Zoom from 'react-img-zoom';
function ItemImage({ product }) {
  const matches = useMediaQuery(
    '(min-width:600px)'
  );
  return (
    <Box
      padding={2}
      sx={{
        display: 'flex',
        overflow: ' hidden',
        objectFit: 'contain',
      }}
    >
      {matches ? (
        <Zoom
          img={product.image}
          zoomScale={3}
          height={300}
          width={480}
        />
      ) : (
        <img
          width="100%"
          src={product.image}
          alt={product.title}
        />
      )}
    </Box>
  );
}

export default ItemImage;
