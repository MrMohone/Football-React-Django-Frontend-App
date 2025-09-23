import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function DescriptionFrom({label, rows, value, name, onChange, onBlur, error, helperText}) {
  return (
        <TextField
          id="outlined-multiline-static"
          label= {label}
          sx={{width: '100%'}}
          multiline
          rows={rows}
          //  For Formik
          value = {value}
          name = {name}
          onChange = {onChange}
          onBlur = { onBlur}
          error = {error}
          helperText = {helperText} 
        />

     
  );
}
