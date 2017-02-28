import React from 'react';

import ProfileImage from './UserSummary/ProfileImage';
import UserDetail from './UserSummary/UserDetail';
import UserDescription from './UserSummary/UserDescription';

export default class UserSummary extends React.Component{
    render(){
      return (
            <div class="row">
              <div class="col-sm-3 well">
                <ProfileImage/>
              </div>
              <div class="col-sm-9 well">
                <div class="row">
                  <div class="col-sm-12">
                    <UserDetail/>
                  </div>
                  <div class="col-sm-12">
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary">Posts</button>
                      <button type="button" class="btn btn-primary">Followers</button>
                      <button type="button" class="btn btn-primary">Following</button>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <UserDescription/>
                  </div>
                </div>
              </div>
            </div>
      );
    }
}
