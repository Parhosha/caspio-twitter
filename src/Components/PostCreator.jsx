import React from 'react';
import style from '../Styles/clients.module.css';
import { NavLink } from 'react-router-dom';

const PostCreator = (props) => {
  //console.log(props);

  return (
    <div className={style.user}>
      <NavLink to={'/Author/' + props.id} user={props.name} title={props.title}>
        <div id={props.id}>
          <img src={'https://picsum.photos/' + props.id + '0'} alt="" />

          <div className={style.info}>
            <p>
              <b>{props.name}</b>
            </p>
            <p>
              {props.posts.map((p) =>
                p.userId == props.id ? p.title.slice(35, p.title.length) : console.log(),
              )}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
export default PostCreator;

{
  /*
  <p id={style.registration} onClick={props.registerDisable}>
        {' '}
        <NavLink to="/Registration"> Registration</NavLink>
      </p>
      */
}
