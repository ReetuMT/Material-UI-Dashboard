import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, About: "Reetu", Details: "Full Name : Reetu M Tambre " },
  { id: 2, About: " ", Details: "Father Name : Malatesh M Tambre " },
  { id: 23, About: " ", Details: "Mother Name : Renu M Tambre " },
];

const columns = [
  { field: 'About', headerName: 'About', width: 150 },
  { field: 'Details', headerName: 'Details', width: 585 },
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
