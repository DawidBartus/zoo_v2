import React from 'react';
import header from './headerUtils/header.jpg';
import style from './headerStyle.module.css';

const HeaderElem = () => {
  return (
    <header style={{ width: '100%', maxWidth: '1200px' }}>
      <div
        style={{
          backgroundImage: `url(${header})`,
          boxShadow: '8px 10px 30px 7px rgba(66, 68, 90, 1)',
        }}
        className={style.headerPicture}
        alt="aaa"
      >
        <p className={style.mainHeader}>
          Bezpieczne miejsce, dla twojego psiego przyjaciela
        </p>
      </div>
    </header>
  );
};

export default HeaderElem;
