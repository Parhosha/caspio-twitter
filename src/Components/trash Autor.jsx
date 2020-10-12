import React from 'react';
import style from '../Styles/Author.module.css';

const RegisterPostCreator = (props) => {
  console.log(props);
  return (
    <div className={style.user}>
      <img src={props.srcLine} alt="" />

      <div className={style.info}>
        <p>{props.string}</p>

        <div className={style.editButton}>
          <b>{'Редактировать'}</b>
        </div>
        <div className={style.editButton}>
          <b>{'Удалить'}</b>
        </div>
      </div>
    </div>
  );
};
export default RegisterPostCreator;
