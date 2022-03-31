import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Dialog,
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
import RadioField from '../../../components/form-controls/RadioField/RadioField';
import { editUserData } from '../../Authentication/userSlice';
function EditForm({ open, onClose, user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

      gender: yup.string(),

      address: yup
        .string()
        .required('Please input this field'),
      phone: yup
        .string()
        .required('Please input this field'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,

      gender: user.gender,

      address: user.address || '',
      phone: user.phone || '',
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (value) => {
    dispatch(
      editUserData({
        ...value,
        password: user.password,
      })
    );
    notify('success', 'Update Successfully!');
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          color="primary"
        >
          Edit Information
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
          <InputField
            form={form}
            name="address"
            label="Address"
          />
          <InputField
            form={form}
            name="phone"
            label="Phone"
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
    </Dialog>
  );
}

export default EditForm;
