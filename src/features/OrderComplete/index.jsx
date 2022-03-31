import {
  Button,
  Container,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
function OrderComplete(props) {
  const navigate = useNavigate();
  return (
    <Box mt={3}>
      <Paper elevation={0}>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h4"
            color="primary"
            gutterBottom
            fontWeight="bold"
          >
            Thank You !
          </Typography>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/206/240/small/fast-delivery-icon-free-vector.jpg"
            alt="Thank You!"
          />
          <Typography variant="h6" gutterBottom>
            Your order will be delivery soon.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/products')}
          >
            Continue Shopping
          </Button>
        </Container>
      </Paper>
    </Box>
  );
}

export default OrderComplete;
