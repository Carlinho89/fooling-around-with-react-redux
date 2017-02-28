import React from 'react';

import Username from './Username';
import UserDescription from './UserDescription';

export default class UserDetail extends React.Component{
    render(){
      const usrName = 'Carlinho8989';
      return (
        <div>
          <Username usrName={usrName}/>
        </div>
      );
    }
}
