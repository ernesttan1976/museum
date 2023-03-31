import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const locations = [
  {
    value: '1001',
    label: 'Gallery1',
  },
  {
    value: '1002',
    label: 'Gallery2',
  },
  {
    value: '1003',
    label: 'Gallery3',
  },
  {
    value: '1004',
    label: 'Gallery4',
  },
];

export default function CustomTextField() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="EUR"
        helperText="Please select your currency"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
