import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import { Controller } from 'react-hook-form';
function SelectField({
  form,
  label,
  name,
  optionList,
}) {
  const [option, setOption] = React.useState(
    optionList[1]
  );

  const handleChange = (event) => {
    setOption(event.target.value);
    form.setValue(name, event.target.value);
  };

  const { control, formState } = form;

  const { errors } = formState;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select
            value={option}
            label={label}
            onChange={handleChange}
          >
            {optionList.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
}

export default SelectField;
