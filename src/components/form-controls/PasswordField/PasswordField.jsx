import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
function PasswordField({ form, label, name }) {
  const [showPassword, setShowPassword] =
    useState(false);
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
        >
          <InputLabel>{label}</InputLabel>
          <OutlinedInput
            error={!!errors[name]}
            label={label}
            type={
              showPassword ? 'text' : 'password'
            }
            {...field}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() =>
                    setShowPassword(
                      (prev) => !prev
                    )
                  }
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormLabel
            sx={{
              fontSize: '12px',
              padding: '3px 14px 0 ',
            }}
          >
            {errors[name] ? (
              errors[name]?.message
            ) : (
              <p> </p>
            )}
          </FormLabel>
        </FormControl>
      )}
    />
  );
}

export default PasswordField;
