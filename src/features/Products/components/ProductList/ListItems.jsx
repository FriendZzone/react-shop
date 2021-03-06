import { Grid } from '@mui/material';
import React from 'react';
import ListItemCard from './ListItemCard';

function ListItems({ productList }) {
  return (
    <Grid container>
      {productList.map((item) => (
        <Grid
          key={item.id}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <ListItemCard product={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ListItems;
