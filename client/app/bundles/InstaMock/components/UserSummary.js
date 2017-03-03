import React from 'react';

import ProfileImage from './UserSummary/ProfileImage';
import UserDetail from './UserSummary/UserDetail';
import UserDescription from './UserSummary/UserDescription';
import { connect } from 'react-redux';

//Actions
import { getMockUser } from '../actions/userActions';

export class UserSummary extends React.Component{
    loadMockUser(){
      this.props.dispatch(getMockUser());
    }

    render(){
      const { user } = this.props;
      return (
            <div class='row'>
              <div class='col-sm-3 well'>
                <ProfileImage/>
              </div>
              <div class='col-sm-9 well'>
                <div class='row'>
                  <div class='col-sm-12'>
                    <UserDetail {...user} />
                  </div>
                  <div class='col-sm-12'>
                    <div class='btn-group'>
                      <button type='button' class='btn btn-primary'>Posts</button>
                      {' '}
                      <button type='button' class='btn btn-primary'>Followers</button>
                      {' '}
                      <button type='button' class='btn btn-primary'>Following</button>
                    </div>
                  </div>
                  <div class='col-sm-12'>
                    <br/>
                    <button type='button' class='btn btn-primary' id='login' onClick={this.loadMockUser.bind(this)}>LoadMockUser</button>
                  </div>
                </div>
              </div>
            </div>
      );
    }
}

const ConnectedUserSummary = connect((store) => {
  return {
    user: store.user.user,
    fetched: store.user.userFetched,
  };
})(UserSummary)

export default ConnectedUserSummary;
