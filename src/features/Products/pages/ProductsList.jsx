import {
  Box,
  Button,
  Grid,
  Paper,
} from '@mui/material';
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
import Drawer from '@mui/material/Drawer';
import SearchIcon from '@mui/icons-material/Search';
function ProductsList(props) {
  const [category, setCategory] = useState('');
  const [productList, setProductList] = useState(
    []
  );
  const [openDrawer, setOpenDrawer] =
    useState(false);
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
        <Button
          variant="contained"
          size="small"
          sx={{
            display: {
              xs: 'flex',
              sm: 'none',
            },
            position: 'fixed',
            top: '10%',
            left: '0',
            zIndex: '10',
          }}
          onClick={() => setOpenDrawer(true)}
          startIcon={<SearchIcon />}
        >
          Filters
        </Button>
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <ListFilters
            setCategory={setCategory}
          />
        </Drawer>
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
