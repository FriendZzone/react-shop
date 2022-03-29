import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    maxWidth: '800px',
  },
  toggleButton: {
    width: '80%',
    margin: '0 auto',
  },
}));
function Authentication() {
  const location = useLocation();

  const navigate = useNavigate();
  const classes = useStyles();
  const [login, setLogin] = useState(
    location.state?.loginOption
  );

  const handleClose = () => {
    navigate('/');
  };
  const handleToggleLogin = () => {
    setLogin((prev) => !prev);
  };

  return (
    <Dialog className={classes.root} open>
      <DialogTitle className={classes.title}>
        Welcome to React Shop !
      </DialogTitle>

      {login ? <Login /> : <SignUp />}
      <Button
        className={classes.toggleButton}
        onClick={handleToggleLogin}
        size="small"
      >
        {login
          ? 'Dont have an account? Create one here !'
          : 'Have account yet ? Login Here !'}
      </Button>
      <DialogActions>
        <Button onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Authentication;
