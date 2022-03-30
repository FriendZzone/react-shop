import { Controller } from 'react-hook-form';
import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { TextField } from '@mui/material';
function DateField({ form, label, name }) {
  const [value, setValue] = useState(null);

  const { control, formState } = form;
  const { errors } = formState;

  return (
    <Controller
      control={control}
      name={name}
      form={form}
      render={({ field }) => (
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
        >
          <DatePicker
            label={label}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              form.setValue(name, newValue);
            }}
            renderInput={(params) => (
              <TextField
                helperText={
                  errors[name] && !value
                    ? errors[name]?.message
                    : ' '
                }
                fullWidth
                {...params}
                error={!!errors[name] && !value}
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
}

export default DateField;
