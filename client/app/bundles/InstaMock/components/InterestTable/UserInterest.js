import React from 'react';
import ClickCounter from './ClickCounter';

class UserInterest extends React.Component{
    saySomething(something) {
        console.log(something);
    }

    handleClick(e) {
      const { onClickCount, interestId} = this.props;
      onClickCount(interestId);
    }

  render(){
    var { clicks, pictUrl }    = this.props;

    if (!pictUrl){
      pictUrl = 'https://pixy.org/images/placeholder.png';
    }

    const imageDivStyle = {
      width : '350px',
      height : '250px'
    };
    return (
      <div>
        <div class='col-sm-4' style={imageDivStyle}>
          <ClickCounter clickCount={clicks}/>
          <a class='thumbnail' href='#'>
            <img class='img-responsive' onClick={this.handleClick.bind(this)} src={pictUrl} alt='Interest'/>
          </a>
        </div>
      </div>

    );
  }
}

export default UserInterest;
