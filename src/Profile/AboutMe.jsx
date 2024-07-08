import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, About: "Full Name :", Details: "Reetu M Tambre " },
  { id: 2, About: "Father Name :", Details: "Malatesh M Tambre " },
  { id: 23, About: "Mother Name :", Details: "Renu M Tambre " },
];

const columns = [
  { field: 'About', headerName: 'About', width: 150 },
  { field: 'Details', headerName: 'Details', width: 150 },
];

export default function AboutMe() {
  return (
    <Box
      sx={{
        height: 300,
        width: '100%',
        '& .font-tabular-nums': {
          fontVariantNumeric: 'tabular-nums',
        },
      }}
    >
      <DataGrid
        columns={columns}
        rows={rows}
      />
    </Box>
  );
}
