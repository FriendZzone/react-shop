import { Box } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductItem from './pages/ProductItem';
import ProductsList from './pages/ProductsList';

function Products(props) {
  return (
    <Box sx={{ marginTop: '2vh' }}>
      <Routes>
        <Route
          path="/"
          element={<ProductsList />}
          exact
        />
        <Route
          path="/:id"
          element={<ProductItem />}
        />
      </Routes>
    </Box>
  );
}

export default Products;
