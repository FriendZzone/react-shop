import {
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import ListItemCard from '../ProductList/ListItemCard';

function RelatedProductsList({
  relatedProductsList,
  category,
}) {
  return (
    <Grid item sx={{ width: '100%' }}>
      <Divider />
      <Typography
        sx={{ marginTop: '2%' }}
        variant="h6"
      >
        Related to {}
        <Typography
          variant="h6"
          component="span"
          color="primary"
        >
          {category}{' '}
        </Typography>
        category:
      </Typography>
      <Grid container padding={1}>
        {relatedProductsList.map((item) => (
          <Grid
            key={item.id}
            item
            xs={8}
            sm={8}
            md={3}
            sx={{ margin: '0 auto' }}
          >
            <ListItemCard product={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default RelatedProductsList;
