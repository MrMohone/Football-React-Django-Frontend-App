import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function MyMessage({message,messageColor}) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '30px',
        color: 'white',
        marginBottom: '20px',
        padding: '10px',
        display: 'flex',
        backgroundColor: messageColor,
        alignItems: 'center'
      }}
    >
        <Typography>{message}</Typography>
    </Box>
  );
}
