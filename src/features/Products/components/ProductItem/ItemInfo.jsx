import {
  Box,
  Typography,
  Rating,
  Button,
} from '@mui/material';
import React from 'react';
import { formatCurrency } from '../../../../utils';
import ItemForm from './ItemForm';

function ItemInfo({ product }) {
  return (
    <Box padding={3} paddingRight={1}>
      <Typography variant="h5" fontWeight="bold">
        {product.title}
      </Typography>
      <Typography
        variant="subtitle1"
        component="span"
      >
        {product.rating.rate}
      </Typography>
      <Rating
        name="read-only"
        value={product.rating.rate}
        readOnly
        size="small"
      />
      <Typography
        variant="h4"
        color="secondary"
        gutterBottom
      >
        {formatCurrency(product.price)}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {product.description}
      </Typography>

      <ItemForm product={product} />
    </Box>
  );
}

export default ItemInfo;
