import Link from 'next/link';
import React from 'react';

const AppButton = () => {
  return (
    <h1 className="text-black text-2xl">
      <Link href="/">News</Link>
    </h1>
  );
};

export default AppButton;
