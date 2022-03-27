import '@fontsource/poppins';
import {
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './features/HomePage';
import Products from './features/Products';
const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/products/*"
              element={<Products />}
            />
          </Routes>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
