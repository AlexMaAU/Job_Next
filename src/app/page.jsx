'use client';

import RedirectTemplate from '../components/RedirectTemplate/RedirectTemplate';

export default function Home() {
  // 页面跳转逻辑
  const user = undefined;
  if (user === undefined) {
    RedirectTemplate('register');
  }

  return <div>Home Page</div>;
}
