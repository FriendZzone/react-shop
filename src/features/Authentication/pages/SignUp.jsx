import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  LinearProgress,
  Typography,
} from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import InputField from '../../../components/form-controls/InputField/InputField';
import PasswordField from '../../../components/form-controls/PasswordField/PasswordField';
import RadioField from '../../../components/form-controls/RadioField/RadioField';
import { addUser } from '../userSlice';
import { useNavigate } from 'react-router-dom';
function SignUp() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
        addUser(value)
      ).unwrap();
      console.log(res);
      setLoading(false);
      navigate('/products');
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
        Sign Up
      </Typography>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <InputField
          form={form}
          name="email"
          label="Email"
        />
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Box width="48%">
            <InputField
              form={form}
              name="firstName"
              label="First Name"
            />
          </Box>
          <Box width="48%">
            <InputField
              form={form}
              name="lastName"
              label="Last Name"
            />
          </Box>
        </Box>
        <RadioField
          form={form}
          name="gender"
          label="Gender"
        />
        <PasswordField
          form={form}
          name="password"
          label="Password"
        />
        <PasswordField
          form={form}
          name="retypePassword"
          label="Retype Password"
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </DialogContent>
  );
}

export default SignUp;
