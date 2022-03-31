import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  LinearProgress,
  Typography,
} from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import InputField from '../../../components/form-controls/InputField/InputField';
import PasswordField from '../../../components/form-controls/PasswordField/PasswordField';
import { login } from '../userSlice';
function Login() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notify = (type, message) =>
    toast[type](message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Invalid Email Address')
        .required('Please input this field'),
      password: yup
        .string()
        .min(
          6,
          'Password must has at least 6 characters'
        )
        .required('Please input this field'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = async (value) => {
    try {
      setLoading(true);
      const loginData =
        JSON.parse(
          localStorage.getItem(
            'userDataReactShop'
          )
        ) || {};
      if (
        loginData.email === value.email &&
        loginData.password === value.password
      ) {
        const res = await dispatch(login(value));
        notify('success', 'Login Successfully!');
        navigate('/products');
      } else {
        setLoading(false);
        notify(
          'error',
          'incorrect Email or Password !'
        );
      }
    } catch (err) {
      setLoading(false);
    }
  };
  return (
    <DialogContent>
      {loading && <LinearProgress />}

      <Typography
        variant="h4"
        align="center"
        gutterBottom
        color="primary"
      >
        Login
      </Typography>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <InputField
          form={form}
          name="email"
          label="Email"
        />

        <PasswordField
          form={form}
          name="password"
          label="Password"
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
        >
          Login
        </Button>
      </form>
    </DialogContent>
  );
}

export default Login;
