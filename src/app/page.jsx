'use client';

import Box from '@mui/material/Box';
import Link from 'next/link';
import startBtn from '../../public/image/startBtn.png';
import Image from 'next/image';

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
        <Image src={startBtn} alt='Click To Start' width={300} height={120} />
      </Link>
    </Box>
  );
}
