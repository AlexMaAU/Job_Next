'use client';

const RedirectTemplate = (destination) => {
  window.location.replace(`${window.location.origin}/${destination}`);
};

export default RedirectTemplate;
