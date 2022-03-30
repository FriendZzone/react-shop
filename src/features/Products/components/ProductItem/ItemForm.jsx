import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import QuantityField from '../../../../components/form-controls/QuantityField';
import { Box, Button } from '@mui/material';
import SelectField from '../../../../components/form-controls/SelectField';
import { optionListByCategory } from '../../../../constants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Cart/cartSlice';
import { toast } from 'react-toastify';

function ItemForm({ product }) {
  const dispatch = useDispatch();
  const optionList = optionListByCategory(
    product.category
  );
  const notify = (type, message) =>
    toast[type](message, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  const schema = yup
    .object({
      quantity: yup.number(),
      option: yup.string(),
    })
    .required();
  const form = useForm({
    defaultValues: {
      quantity: 1,
      option: optionList[1],
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (value) => {
    const payload = {
      id: product.id,
      title: product.title,
      ...value,
      price: product.price,
      image: product.image,
    };
    dispatch(addToCart(payload));
    notify(
      'success',
      `Added ${value.quantity} ${product.title}`
    );
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Box display="flex" margin="20px 0">
        <SelectField
          form={form}
          name="option"
          label="Option"
          optionList={optionList}
        />
        <QuantityField
          form={form}
          name="quantity"
          label="Quantity"
        />
      </Box>

      <Button type="submit" variant="contained">
        Add to card
      </Button>
    </form>
  );
}

export default ItemForm;
