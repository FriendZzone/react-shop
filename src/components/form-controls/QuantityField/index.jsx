import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {
  Button,
  FormControl,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
function QuantityField({ form, label, name }) {
  const { control, formState } = form;
  const { errors } = formState;
  const [value, setValue] = useState(1);
  const handleClickIncrease = () => {
    setValue((prev) => prev + 1);
    form.setValue(name, value + 1);
  };
  const handleClickDecrease = () => {
    setValue((prev) => prev - 1);
    form.setValue(name, value - 1);
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl
          sx={{
            display: 'flex',
            flexDirection: 'row',
            minWidth: '180px',
          }}
          value={value}
        >
          <Button
            size="small"
            onClick={() =>
              handleClickDecrease(value)
            }
            disabled={value <= 1}
          >
            <RemoveCircleIcon />
          </Button>
          <TextField
            // {...field}
            value={value}
            type="number"
            label={label}
          />
          <Button
            size="small"
            onClick={() =>
              handleClickIncrease(value)
            }
          >
            <AddCircleIcon />
          </Button>
        </FormControl>
      )}
    />
  );
}

export default QuantityField;
