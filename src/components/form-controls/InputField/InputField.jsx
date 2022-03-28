import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
function InputField({ form, label, name }) {
  const { control, formState } = form;
  const { errors } = formState;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          fullWidth
          label={label}
          error={!!errors[name]}
          helperText={
            errors[name]
              ? errors[name]?.message
              : ' '
          }
          {...field}
        />
      )}
    />
  );
}

export default InputField;
