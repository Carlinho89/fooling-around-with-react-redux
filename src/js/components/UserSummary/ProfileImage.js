import React from 'react';

export default class ProfileImage extends React.Component{
    render(){
      return (
          <div class="well">
            <p><a href="#">My Profile</a></p>
            <img src="https://www.contentchampion.com/wp-content/uploads/2013/11/avatar-placeholder.png" class="img-circle" height="65" width="65" alt="Avatar"/>
          </div>
      );
    }
}
