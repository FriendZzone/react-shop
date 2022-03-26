import { Grid } from '@mui/material';
import React from 'react';
import { dataFake } from '../../../../data';
import ListItemCard from './ListItemCard';

function ListItems(props) {
  return (
    <Grid container>
      {dataFake.map((item) => (
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
