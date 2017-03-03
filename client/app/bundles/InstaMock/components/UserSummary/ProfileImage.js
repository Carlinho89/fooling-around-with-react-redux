import React from 'react';
import Gravatar from 'react-gravatar';

class ProfileImage extends React.Component{
    render(){
      return (
          <div class='well'>
            <p><a href='#'>My Profile</a></p>
            <Gravatar email='carlo.di-domenico@tum.de' class='img-circle' height='65' width='65' alt='Avatar'/>
          </div>
      );
    }
}

export default ProfileImage;
