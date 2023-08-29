'use client';

import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const RedirectTemplate = (destination) => {
  // The code inside useEffect is only executed on the client (in the browser), thus it has access to window.
  // Otherwise, occur error: ReferenceError: window is not defined
  useEffect(() => {
    window.location.replace(`${window.location.origin}/${destination}`);
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default RedirectTemplate;
