'use client';

import RedirectTemplate from '../components/RedirectTemplate/RedirectTemplate';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Home() {
  // 页面跳转逻辑
  const user = undefined;
  if (user === undefined) {
    RedirectTemplate('landing');
  }

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
}
