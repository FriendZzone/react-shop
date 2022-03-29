import '@fontsource/poppins';
import {
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Authentication from './features/Authentication';
import HomePage from './features/HomePage';
import Products from './features/Products';

import UserProfile from './features/UserProfile';
function App() {
  const [color, setColor] = useState('#009688');
  const [openDialog, setOpenDialog] =
    useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: color,
        // main: '#000',
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
          </Routes>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
