import React, { useState, useEffect } from 'react';
import style from '../Styles/RegisterAuthor.module.css';
import { NavLink } from 'react-router-dom';
import RegisterPostCreator from './RegisterUserPost/Post';

const RegisterAuthor = (props) => {
  let a = Math.round(Math.random() * 100 + 100);
  let line = 'https://picsum.photos/' + a;

  let PostAuthor = props.registerUserMsg.map((p) => (
    <RegisterPostCreator string={p} src={line} updStatusPost={props.updStatusPost} />
  ));

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState('');

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const changeStatusLocal = (e) => {
    //console.log(status);
    setStatus(e.currentTarget.value);
  };

  const changeModeOffSwitch = () => {
    setEditMode(false);
    props.updStatus(status);
    setStatus('');
  };

  const changeModeOnSwitch = () => {
    setEditMode(true);
  };

  //console.log(props);
  return (
    <div className={style.main}>
      <>
        {props.register ? (
          <>
            <div className={style.content}>
              <ul>
                <li>
                  {' '}
                  <NavLink to="/Feed"> Главная </NavLink>
                </li>
              </ul>
            </div>

            <div id={props.id}>
              <h1>{props.register.name}</h1>
              <div className={style.user}>
                <div className={style.info}>
                  <img src="https://picsum.photos/100" alt="" />
                  <input
                    type="text"
                    autoFocus={true}
                    onChange={changeStatusLocal}
                    value={status}
                    placeholder=" Введите свой текст здесь "
                  />
                  <div onClick={changeModeOffSwitch}>
                    <b>{'Твитнуть'}</b>
                  </div>
                </div>
              </div>
              {PostAuthor}
            </div>
          </>
        ) : (
          <h1>
            You didn't register, please go to {<NavLink to="/Registration"> Регистрация </NavLink>}
            and create your account
          </h1>
        )}
      </>
    </div>
  );
};
export default RegisterAuthor;

{
  /*
  <p id={style.registration} onClick={props.registerDisable}>
        {' '}
        <NavLink to="/Registration"> Registration</NavLink>
      </p>
      */
}
