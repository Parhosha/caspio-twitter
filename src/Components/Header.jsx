import React from 'react';
import style from '../Styles/header.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import stylehead from '../Styles/header.module.css';

const Header = (props) => {
  return (
    <>
      <label className={stylehead.switch}>
        <input type="checkbox" onClick={props.changeThem} />
        <span className={stylehead.slider}></span>
      </label>
    </>
  );
};
export default Header;
