'use client';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import RedirectTemplate from 'components/RedirectTemplate/RedirectTemplate';

export default function Home() {
  RedirectTemplate('landing');
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
