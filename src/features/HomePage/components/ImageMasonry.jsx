import { Masonry } from '@mui/lab';
import { Box } from '@mui/material';
import React from 'react';
import { itemMasonryData } from '../../../constants';

function ImageMasonry(props) {
  const itemData = itemMasonryData;
  return (
    <Box
      sx={{
        width: { xs: '0', md: '50%' },
        height: { xs: '0', md: '50vh' },
        marginLeft: 'auto',
      }}
    >
      <Masonry
        columns={3}
        spacing={{ xs: 1, md: 2 }}
      >
        {itemData.map((item, index) => (
          <div
            key={index}
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            {/* <Label>{index + 1}</Label> */}
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

export default ImageMasonry;
