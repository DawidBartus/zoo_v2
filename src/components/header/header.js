import React from 'react';
import header from './headerUtils/header.jpg';
import style from './headerStyle.module.css';

const HeaderElem = () => {
  return (
    <header className={style.headerPicture}>
      <img src={header} alt="aaa"></img>
    </header>
  );
};

export default HeaderElem;
