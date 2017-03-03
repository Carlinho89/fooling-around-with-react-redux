import React from 'react';

class Username extends React.Component{
    render(){
      const { usrName } = this.props;

      return (
          <div class='col-sm-12'>
            <h2>Welcome {usrName}</h2>
          </div>
      );
    }
}

export default Username;
