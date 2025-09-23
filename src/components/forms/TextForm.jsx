import TextField from '@mui/material/TextField';

export default function TextFrom({label, value, name, onChange, onBlur, error, helperText}) {
  return (
    <TextField id="standard-basic" 
               label={label}
               sx={{width:'100%'}}
               variant="outlined"
              //  For Formik
                value = {value}
                name = {name}
                onChange = {onChange}
                onBlur = { onBlur}
                error = {error}
                helperText = {helperText} //text, that displyed in error message
               />
  );
}
