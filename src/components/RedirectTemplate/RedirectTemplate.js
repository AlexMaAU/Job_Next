'use client';

import { useEffect } from 'react';

const RedirectTemplate = (destination) => {
  // The code inside useEffect is only executed on the client (in the browser), thus it has access to window.
  // Otherwise, occur error: ReferenceError: window is not defined
  useEffect(() => {
    window.location.replace(`${window.location.origin}/${destination}`);
  }, []);
  return <h2>Redirecting...</h2>;
};

export default RedirectTemplate;
