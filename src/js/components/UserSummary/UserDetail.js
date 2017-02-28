import React from 'react';
import {PropTypes} from 'react';


import Username from './Username';
import UserDescription from './UserDescription';

export default class UserDetail extends React.Component{
    static propTypes = {
      name: PropTypes.string
    }

    render(){
      const { name } = this.props;
      return (
        <div>
          <Username usrName={ name }/>
        </div>
      );
    }
}
