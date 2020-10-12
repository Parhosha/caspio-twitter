import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Components/Header';
import Clients from './Components/Clients';
import Author from './Components/Author';
import Registration from './Components/Registration';
import { reduxForm } from 'redux-form';
import style from './Styles/App.module.css';

import {
  getUser,
  setNewUserAC,
  createPostAC,
  updStatusPostAC,
  getPost,
  getComments,
  changeThemAC,
} from './redux/clients-reducer';
import Default from './Components/Default';
import RegisterAuthor from './Components/RegisterAuthor';

const FormRedux = reduxForm({ form: 'Registration' })(Registration);

class App extends React.Component {
  componentDidMount() {
    // this.props.setString();
    this.props.getUser();
    this.props.getPost();
    this.props.getComments();
  }

  render() {
    const onSubmit = (formData) => {
      console.log(formData);
      this.props.setNewUserAC(formData);
    };
    const updStatus = (post) => {
      this.props.createPostAC(post);
    };
    const changeThem = () => {
      this.props.changeThemAC();
    };
    const updStatusPost = (newString, prevstring) => {
      for (let i = 0; i < this.props.registerUserMsg.length; i++) {
        if (this.props.registerUserMsg[i] == prevstring && newString == '') {
          this.props.registerUserMsg.splice(i, 1);
          i = this.props.registerUserMsg.length;
          console.log(this.props.registerUserMsg);
        }
        if (this.props.registerUserMsg[i] == prevstring) {
          this.props.registerUserMsg[i] = newString;
          i = this.props.registerUserMsg.length;
        }
      }
      //ошибка будет при выборе редактирууемого эллемента, если стринги одинаковые у
      //разных постов - редактироватьс будет первый ;)
      this.props.updStatusPostAC(this.props.registerUserMsg);
    };

    // console.log(this.props.them);
    return (
      <div className={this.props.them ? style.LightThem : style.DarkThem}>
        <Header them={this.props.them} changeThem={changeThem} />
        <Route exact path="/" component={() => <Default />} />
        <Route
          path="/Author"
          component={() => (
            <Author
              clients={this.props.clients}
              user={this.props.user}
              posts={this.props.posts}
              comments={this.props.comments}
            />
          )}
        />
        <Route
          path="/Registration"
          component={() => (
            <FormRedux
              onSubmit={onSubmit}
              them={this.props.them}
              register={this.props.registerUser}
            />
          )}
        />
        <Route
          path="/Feed"
          component={() => (
            <Clients
              clients={this.props.clients}
              register={this.props.registerUser}
              posts={this.props.posts}
            />
          )}
        />{' '}
        <Route
          path="/RegisterAuthor"
          component={() => (
            <RegisterAuthor
              register={this.props.registerUser}
              registerUserMsg={this.props.registerUserMsg}
              updStatus={updStatus}
              updStatusPost={updStatusPost}
              t
            />
          )}
        />
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  clients: state.clients.clients,
  user: state.clients.selectedUser,
  registerUser: state.clients.user,
  registerUserMsg: state.clients.userMsg,
  posts: state.clients.posts,
  comments: state.clients.comments,
  them: state.clients.them,
});
export default connect(mapStateToProps, {
  getUser,
  setNewUserAC,
  createPostAC,
  updStatusPostAC,
  getPost,
  getComments,
  changeThemAC,
})(App);
