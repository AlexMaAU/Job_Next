'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '../app/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Job Next App',
  description: 'Created by Alex Ma',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 把需要使用 styled-components 的组件上嵌套 StyledComponentsRegistry */}
        <StyledComponentsRegistry>
          <ThemeProvider theme={{ color: 'rgb(44, 177, 188)' }}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
