import React from 'react';
import { Field } from 'redux-form';
import styled from '../Styles/Registration.module.css';
import { Redirect } from 'react-router-dom';

const Registration = (props) => {
  return (
    <div className={styled.wrapper} id={props.them ? styled.LightThem : styled.DarkThem}>
      {console.log(props)}
      <form onSubmit={props.handleSubmit} className={styled.Container}>
        <h2>Регистрация</h2>
        <div className={styled.Wrap}>
          <div>
            <label>Name</label>
            <Field name="name" component="input" type="text" placeholder="" required />
          </div>
          <br />
          <div>
            <label>password</label>
            <Field name="surname" component="input" type="password" placeholder="" required />
          </div>

          <br />
        </div>
        <div className={styled.buttons}>
          {props.register ? (
            <button component="button">Войти</button>
          ) : (
            <button component="button">Регистрация</button>
          )}
          {props.register ? <Redirect to="/Feed" /> : console.log(props.register)}
        </div>
      </form>
    </div>
  );
};
export default Registration;
