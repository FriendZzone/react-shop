import { Box, Grid, Paper } from '@mui/material';
import React, {
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { productApi } from '../../../api/productApi';
import ListFilters from '../components/ProductList/ListFilters';
import ListItems from '../components/ProductList/ListItems';
import ProductsListSkeleton from '../components/ProductsSkeleton/ProductsListSkeleton';
import { getAllProducts } from '../productSlice';

function ProductsList(props) {
  const [category, setCategory] = useState('');
  const [productList, setProductList] = useState(
    []
  );
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res =
          (await JSON.parse(
            localStorage.getItem('productsList')
          )) ||
          (await dispatch(
            getAllProducts()
          ).unwrap());
        setProductList(res);
        setLoading(false);
      } catch (err) {
        setLoading(true);

        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const res = await productApi.getByCategory(
        category
      );
      setLoading(false);

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
            {loading ? (
              <ProductsListSkeleton length={12} />
            ) : (
              <ListItems
                productList={productList}
              />
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default ProductsList;
