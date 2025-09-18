import TextField from '@mui/material/TextField';

export default function TextFrom({label}) {
  return (
    <TextField id="standard-basic" 
               label={label}
               sx={{width:'100%'}}

               variant="outlined" />
  );
}
