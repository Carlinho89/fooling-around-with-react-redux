import React from "react";

export default class UserInterest extends React.Component{
  render(){
    const {clickCount} = this.props;
    
    return (
      <div>
        Click Count is: {clickCount}
      </div>
    );
  }

}
