import React from 'react';
import HeaderElem from './header/header';
import Navigation from './navigation/navigation';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Navigation />
      <HeaderElem />
    </div>
  );
};
