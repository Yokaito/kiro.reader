'use client';

import * as React from 'react';

export const Button = () => {
  return (
    <button
      className="text-amber-500 font-bold text-lg"
      onClick={() => alert('boop')}
    >
      Boop
    </button>
  );
};
