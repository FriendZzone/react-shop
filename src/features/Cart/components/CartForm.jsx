import { yupResolver } from '@hookform/resolvers/yup';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import DateField from '../../../components/form-controls/DateField';
import InputField from '../../../components/form-controls/InputField/InputField';
import SelectField from '../../../components/form-controls/SelectField';
import { deliveryMethods } from '../../../constants';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { clearCart } from '../cartSlice';
import { getUserInfo } from '../../Authentication/userSelectors';
import { convertFullName } from '../../../utils';

function CartForm({ open, handleClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getUserInfo);
  const fullName = convertFullName(
    user.firstName,
    user.lastName
  );
  const schema = yup
    .object({
      deliveryDate: yup
        .string('Please input this field')
        .required('Please input this field'),
      fullName: yup
        .string()
        .required('Please input this field'),
      address: yup
        .string()
        .required('Please input this field'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      fullName: fullName,
      address: user.address || '',
      paymentMethod: deliveryMethods[1],
      deliveryDate: '',
    },
    resolver: yupResolver(schema),
  });
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
  const onSubmit = (value) => {
    console.log('cart form', value);
    notify(
      'success',
      'Thank you! Your order has been created'
    );
    dispatch(clearCart());
    navigate('/thanks');
  };
  return (
    <>
      <Container>
        <DialogTitle align="center">
          Complete Your Orders
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please complete these information
            below to complete your orders!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <InputField
              name="fullName"
              label="Full Name"
              form={form}
            />
            <InputField
              name="address"
              label="Address"
              form={form}
            />
            <DateField
              name="deliveryDate"
              label="Delivery Date"
              form={form}
            />
            <SelectField
              name="paymentMethod"
              form={form}
              label="Payment Method"
              optionList={deliveryMethods}
            />
            <Button
              sx={{ marginTop: '2vh' }}
              fullWidth
              type="submit"
              variant="contained"
            >
              Order
            </Button>
            <Button
              align="right"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </form>
        </DialogActions>
      </Container>
    </>
  );
}

export default CartForm;
