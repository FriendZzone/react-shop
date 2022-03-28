import { FormLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';
import { Controller } from 'react-hook-form';
function PasswordField({ form, label, name }) {
  const { control, formState } = form;
  const { errors } = formState;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl
          error={!!errors[name]}
          variant="outlined"
          fullWidth
          {...field}
          sx={{ marginBottom: '2%' }}
        >
          <FormLabel>{label}</FormLabel>
          <RadioGroup
            {...field}
            defaultValue="female"
            row
            name={name}
            control={control}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
      )}
    />
  );
}

export default PasswordField;
