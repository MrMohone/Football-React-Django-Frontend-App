import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectForm({label,options, value, name, onChange, onBlur}) {

  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
           //  For Formik
          value = {value}
          name = {name}
          onChange = {onChange}
          onBlur = { onBlur}
        >
            {options.map((option) => (
              <MenuItem value={option.id}>
                {option.name}

              </MenuItem>
            ))}
        </Select>
      </FormControl>
  );
}