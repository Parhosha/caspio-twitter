import React from 'react';
import { connect } from 'react-redux';
import { selectUserAC } from '../redux/clients-reducer';
import AuthorPage from './AuthorPage';

class Author extends React.Component {
  componentDidMount(props) {
    let pathArray = window.location.pathname.split('/');

    this.props.selectUserAC(pathArray[pathArray.length - 1], this.props.clients);
  }

  render() {
    //console.log(this.props);

    return (
      <>
        <AuthorPage
          user={this.props.user}
          posts={this.props.posts}
          comments={this.props.comments}
        />{' '}
      </>
    );
  }
}

let mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { selectUserAC })(Author);
