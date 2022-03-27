import { Divider } from '@material-ui/core';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import React, {
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { productApi } from '../../../api/productApi';
import Loading from '../../../components/Loading';
import NotFound from '../../../components/NotFound';
import ItemImage from '../components/ProductItem/ItemImage';
import ItemInfo from '../components/ProductItem/ItemInfo';
import ItemSeller from '../components/ProductItem/ItemSeller';
import RelatedProductsList from '../components/ProductItem/RelatedProductsList';
function ProductItem() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [
    relatedProductsList,
    setRelatedProductsList,
  ] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await productApi.getProduct(
          id
        );
        const { data } = res;
        const { category } = data;
        const categoryRes =
          await productApi.getByCategory(
            category
          );

        setRelatedProductsList(categoryRes.data);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.log('catch');
        setNotFound(true);
        setLoading(false);
      }
    })();
  }, [id]);

  if (notFound) {
    return <NotFound />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <Box>
      {console.log(product)}
      <Paper>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={5}>
              <ItemImage product={product} />
              <Typography variant="body1">
                Sold: {product.rating.count}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7}>
              <ItemInfo product={product} />
            </Grid>
            <Grid item sx={{ width: '100%' }}>
              <Divider />
              <ItemSeller />
            </Grid>

            <RelatedProductsList
              id={id}
              relatedProductsList={
                relatedProductsList
              }
            />
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
}

export default ProductItem;
