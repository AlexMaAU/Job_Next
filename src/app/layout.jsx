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

const light = {
  colors: {
    primary: 'rgb(44, 177, 188)',
    secondary: 'rgb(0, 0, 0)',
    primary_light: '#87eaf2',
    gray: 'rgb(72, 101, 129)',
    light_gray: 'rgb(215, 215, 215)',
    bg_color: 'white'
  },
  borderRadius: '10px',
};

const dark = {
  colors: {
    primary: 'rgb(0, 0, 0)',
    secondary: 'rgba(0, 0, 0, 0.5)',
  },
  borderRadius: '2px',
};

// layout.jsx 用来定义页面的基础布局，会应用到每个 page.jsx。比如定义页面的基础布局是每个页面都有 Header、Content和Footer 三部分组成。

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* 把需要使用 styled-components 的组件上嵌套 StyledComponentsRegistry */}
        <StyledComponentsRegistry>
          {/* ThemeProvider中记录所有主题相关的信息，子组件可以通过prop调用。更改theme相关内容，可以在一处修改，就近维护原则 */}
          <ThemeProvider
            theme={light} //切换变量便可切换主题颜色和样式
          >
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
