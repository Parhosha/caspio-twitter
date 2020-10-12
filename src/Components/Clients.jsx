import React from 'react';
import style from '../Styles/clients.module.css';
import less from '../Styles/clients.module.less';
import PostCreator from './PostCreator';
import { NavLink } from 'react-router-dom';

const Clients = (props) => {
  //console.log(props);

  let Post = props.clients.map((p, index) => (
    <PostCreator
      name={p.name}
      title={p.email}
      address={p.address.street}
      id={p.id}
      key={`${p.id}_${p.id}`}
      posts={props.posts}
    />
  ));

  return (
    <div className={style.feed}>
      <div className={style.content}>
        <ul>
          <li>
            <NavLink to="/Feed"> Главная </NavLink>{' '}
          </li>

          {props.register ? (
            <li>
              <NavLink to="/RegisterAuthor"> Профиль </NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/Registration"> Регистрация </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className={style.wrap}>
        <h1> Главная </h1>
        <div className={style.Clients}>
          <div className={style.wrap}>
            <div>{Post}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Clients;
