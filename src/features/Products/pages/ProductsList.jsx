import { Box, Grid, Paper } from '@mui/material';
import React from 'react';
import ListFilters from '../components/ProductList/ListFilters';
import ListItems from '../components/ProductList/ListItems';

function ProductsList(props) {
  return (
    <Box>
      <Paper elevation={0}>
        <Grid container>
          <Grid
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
            item
            xs={0}
            sm={3}
          >
            <ListFilters />
          </Grid>
          <Grid item xs={12} sm={9}>
            <ListItems />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default ProductsList;
