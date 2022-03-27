import { Divider } from '@material-ui/core';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Rating,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, {
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { productApi } from '../../../api/productApi';
import Loading from '../../../components/Loading';
import NotFound from '../../../components/NotFound';
import {
  formatCurrency,
  getRandomUser,
  getRandomPicture,
} from '../../../utils';
import Zoom from 'react-img-zoom';
import ItemSeller from '../components/ProductItem/ItemSeller';
import ListItemCard from '../components/ProductList/ListItemCard';
function ProductItem() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [
    relatedProductsList,
    setRelatedProductsList,
  ] = useState([]);
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [seller, setSeller] = useState({});
  const matches = useMediaQuery(
    '(min-width:600px)'
  );
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await productApi.getProduct(
          id
        );
        setProduct(res.data);
        const { category } = res.data;
        const res2 =
          await productApi.getByCategory(
            category
          );
        setRelatedProductsList(res2.data);
        const res3 = await getRandomUser();
        setSeller(res3.data);
        setLoading(false);
      } catch (err) {
        console.log('catch');
        // try {
        //   const res = JSON.parse(
        //     localStorage.getItem('productsList')
        //   ).find((item) => item.id == id);
        //   setProduct(res);
        //   const { category } = res;
        //   const res2 =
        //     await productApi.getByCategory(
        //       category
        //     );
        //   setRelatedProductsList(res2.data);
        //   setLoading(false);
        // } catch (err) {
        //   setNotFound(true);
        //   setLoading(false);
        // }
        setNotFound(true);
        setLoading(false);
      }
    })();
  }, [id]);
  const sellerImage = getRandomPicture();
  console.log(seller);
  if (notFound) {
    return <NotFound />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <Box>
      <Paper>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={5}>
              <Box
                padding={2}
                sx={{
                  display: 'flex',
                  overflow: ' hidden',
                  objectFit: 'contain',
                }}
              >
                {matches ? (
                  <Zoom
                    img={product.image}
                    zoomScale={3}
                    height={300}
                    width={480}
                  />
                ) : (
                  <img
                    width="100%"
                    src={product.image}
                    alt={product.title}
                  />
                )}
              </Box>
              <Typography variant="body1">
                Sold: {product.rating.count}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box padding={3} paddingRight={1}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                >
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
                <Typography
                  variant="body2"
                  gutterBottom
                >
                  {product.description}
                </Typography>

                <Button variant="contained">
                  Add to card
                </Button>
              </Box>
            </Grid>
            <Grid item sx={{ width: '100%' }}>
              <Divider />
              <ItemSeller
                seller={seller}
                image={sellerImage}
              />
            </Grid>
            <Grid item sx={{ width: '100%' }}>
              <Divider />
              <Typography
                sx={{ marginTop: '2%' }}
                variant="h6"
              >
                Related to{' '}
                <Typography
                  variant="h6"
                  component="span"
                  color="primary"
                >
                  {product.category}{' '}
                </Typography>
                category:
              </Typography>
              <Grid container padding={1}>
                {relatedProductsList.map(
                  (item) => (
                    <Grid
                      key={item.id}
                      item
                      xs={8}
                      sm={8}
                      md={3}
                      sx={{ margin: '0 auto' }}
                    >
                      <ListItemCard
                        product={item}
                      />
                    </Grid>
                  )
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
}

export default ProductItem;
