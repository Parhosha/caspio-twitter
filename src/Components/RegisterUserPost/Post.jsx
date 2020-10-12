import React, { useState, useEffect } from 'react';
import style from './post.module.css';

const RegisterPostCreator = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState('');

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const changeStatusLocal = (e) => {
    // console.log(status);
    setStatus(e.currentTarget.value);
  };

  const changeModeOffSwitch = () => {
    setEditMode(false);
    props.updStatusPost(status, props.string);
    setStatus(status);
  };

  const changeModeOnSwitch = () => {
    setEditMode(true);
  };
  const deletePost = () => {
    props.updStatusPost('', props.string);
  };

  console.log(props);
  return (
    <>
      <div className={style.user}>
        <img src="https://picsum.photos/100" alt="" />

        <div className={style.info}>
          {editMode ? (
            <>
              {' '}
              <input
                type="text"
                autoFocus={true}
                onChange={changeStatusLocal}
                placeholder=" . . . "
              />
              <div onClick={changeModeOffSwitch} className={style.editButton}>
                <b>Сохранить</b>
              </div>
            </>
          ) : (
            <>
              <p>{props.string}</p>
              <div className={style.editButton} onClick={changeModeOnSwitch}>
                <b>{'Редактировать'}</b>
              </div>

              <div className={style.editButton} onClick={deletePost}>
                <b>{'Удалить'}</b>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default RegisterPostCreator;
