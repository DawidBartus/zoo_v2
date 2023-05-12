import React from 'react';
import HeaderElem from './header/header';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',

        fontSize: 40,
        color: '#010101',
      }}
    >
      <HeaderElem />
    </div>
  );
};
