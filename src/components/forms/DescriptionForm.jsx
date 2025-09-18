import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function DescriptionFrom({label, rows}) {
  return (
        <TextField
          id="outlined-multiline-static"
          label= {label}
          sx={{width: '100%'}}
          multiline
          rows={rows}
        />

     
  );
}
