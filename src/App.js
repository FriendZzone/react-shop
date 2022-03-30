import '@fontsource/poppins';
import {
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header';
import Authentication from './features/Authentication';
import HomePage from './features/HomePage';
import Products from './features/Products';
import UserProfile from './features/UserProfile';
import Cart from './features/Cart';

function App() {
  const currentColor =
    JSON.parse(
      localStorage.getItem(
        'colorSettingReactShop'
      )
    ) || '#009688';
  const [color, setColor] =
    useState(currentColor);
  const [openDialog, setOpenDialog] =
    useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: color,
      },
    },
    typography: {
      fontFamily: 'Poppins',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header
          open={openDialog}
          setOpen={setOpenDialog}
        />
        <ToastContainer />
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  open={openDialog}
                  setOpen={setOpenDialog}
                  setColor={setColor}
                  color={color}
                />
              }
            />
            <Route
              path="/products/*"
              element={<Products />}
            />
            <Route
              path="/users/*"
              element={<UserProfile />}
            />
            <Route
              path="/register/*"
              element={<Authentication />}
            />
            <Route
              path="/cart/*"
              element={<Cart />}
            />
          </Routes>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
