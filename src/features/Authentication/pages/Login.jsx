import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Typography,
  LinearProgress,
} from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import InputField from '../../../components/form-controls/InputField/InputField';
import PasswordField from '../../../components/form-controls/PasswordField/PasswordField';
import { login } from '../userSlice';
function Login({ onClose }) {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const schema = yup
    .object({
      firstName: yup
        .string()
        .required('Please input this field'),
      lastName: yup
        .string()
        .required('Please input this field'),
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
      retypePassword: yup
        .string()
        .required('Retype your password')
        .oneOf(
          [yup.ref('password')],
          'Password does not match'
        ),
      gender: yup.string(),
    })
    .required();
  const form = useForm({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      retypePassword: '',
      gender: '',
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = async (value) => {
    try {
      setLoading(true);
      const res = await dispatch(
        login(value)
      ).unwrap();
      console.log(res);
      setLoading(false);
      onClose();
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
