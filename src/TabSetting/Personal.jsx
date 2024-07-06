import React from 'react';
import Navbar from '../Component/Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function Personal() {
  return (
    <div className="bgcolor" style={{padding:5}}>
      <Navbar />
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '28ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Box p={6}>
      <TextField
          id="outlined-read-only-input"
          label="Name"
          defaultValue="Reetu"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Father Name"
          defaultValue="Malatesh P Tambre"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Mother Name"
          defaultValue="Renu M Tambre"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Age"
          defaultValue="00"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Eamil"
          defaultValue="ritreetu642@gmail.com"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Phone"
          defaultValue="###6444642"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Town"
          defaultValue="Harihar"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="District"
          defaultValue="ZipCode"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="District"
          defaultValue="577601"
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
     
    
    </Box>
    </div>
  );
}

export default Personal;
