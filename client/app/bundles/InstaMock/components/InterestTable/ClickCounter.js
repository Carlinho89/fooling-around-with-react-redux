import React from 'react';

class ClickCounter extends React.Component{
  render(){
    const {clickCount} = this.props;

    return (
      <div>
        Click Count is: {clickCount}
      </div>
    );
  }

}

export default  ClickCounter;
