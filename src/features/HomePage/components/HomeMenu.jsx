import { makeStyles } from '@material-ui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HexColorPicker } from 'react-colorful';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: '12%',
    padding: '0 8px',
  },
  logo: {
    width: '300px',
    height: '300px',
    margin: '0 auto',
  },
}));
function HomeMenu({
  open,
  setOpen,
  color,
  setColor,
}) {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box className={classes.root}>
      <Box>
        <Avatar
          className={classes.logo}
          src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"
        />
        <Typography
          align="center"
          gutterBottom
          color="primary"
        >
          Pick Theme Color
        </Typography>
        <div className="color-picker">
          <HexColorPicker
            color={color}
            onChange={setColor}
          />
        </div>
        <Typography
          className={classes.text}
          gutterBottom
          color="primary"
        >
          This Application has built by ReactJS,
          enjoy it!
        </Typography>
        <Button
          variant="outlined"
          endIcon={<ShoppingCartIcon />}
          onClick={() => navigate('/products')}
        >
          Go to React Shop
        </Button>
        <Typography
          color="primary"
          className={classes.text}
          gutterBottom
        >
          For the best experience, please
        </Typography>
        <ButtonGroup variant="contained">
          <Button
            onClick={() =>
              navigate('register', {
                state: {
                  loginOption: true,
                },
              })
            }
          >
            Login
          </Button>

          <Button
            onClick={() =>
              navigate('register', {
                state: {
                  loginOption: false,
                },
              })
            }
          >
            Register
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default HomeMenu;
