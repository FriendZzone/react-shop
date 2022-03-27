import { Box, Grid, Paper } from '@mui/material';
import React, {
  useEffect,
  useState,
} from 'react';
import { productApi } from '../../../api/productApi';
import ListFilters from '../components/ProductList/ListFilters';
import ListItems from '../components/ProductList/ListItems';

function ProductsList(props) {
  const [category, setCategory] = useState('');
  const [productList, setProductList] = useState(
    []
  );

  useEffect(() => {
    (async () => {
      const res =
        await productApi.getAllProducts();
      setProductList(res.data);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const res = await productApi.getByCategory(
        category
      );
      setProductList(res.data);
    })();
  }, [category]);
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
            <ListFilters
              setCategory={setCategory}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <ListItems
              productList={productList}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default ProductsList;
