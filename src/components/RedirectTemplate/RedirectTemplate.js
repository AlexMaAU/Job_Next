'use client';

import { useEffect } from 'react';

const RedirectTemplate = (destination) => {
  useEffect(() => {
    window.location.replace(`${window.location.origin}/${destination}`);
  }, []);
  return <h2>Redirecting...</h2>;
};

export default RedirectTemplate;
