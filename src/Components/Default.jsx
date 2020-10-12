import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import style from '../Styles/Default.module.css';

const Default = (props) => {
  return (
    <div className={style.head}>
      <h1>
        Hello, maybe you wanna visit <NavLink to="/Registration">Registration</NavLink> page?
      </h1>
    </div>
  );
};
export default Default;
