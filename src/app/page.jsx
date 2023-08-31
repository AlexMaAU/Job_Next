'use client';

import Box from '@mui/material/Box';
import Link from 'next/link';
import Button from 'components/Button/Button';

export default function Home() {
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
      <Link href='/landing'>
        <Button primary_light={false}>Start</Button>
      </Link>
    </Box>
  );
}
