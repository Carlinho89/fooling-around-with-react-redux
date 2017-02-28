import React from 'react';

export default class Username extends React.Component{
    render(){
      const { usrName } = this.props;
      console.log('Username is: ' + usrName);
      
      return (
          <div class="col-sm-12">
            <h2>Welcome {usrName}</h2>
          </div>
      );
    }
}
