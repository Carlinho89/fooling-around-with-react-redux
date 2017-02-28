import React from "react";
import ClickCounter from './ClickCounter';

export default class UserInterest extends React.Component{
    constructor(){
      super();
      this.state = {
        count : 0
      };
    }

    saySomething(something) {
        console.log(something);
    }

    handleClick(e) {
      this.saySomething("state is changing: ");
      const {count} = this.state;
      this.setState({
        count: count + 1,
      });

      const { callBack } = this.props;
      callBack();
    }

  render(){
    const { count }    = this.state;
    var {pictUrl}      = this.props;

    if (!pictUrl){
      pictUrl = "https://pixy.org/images/placeholder.png";
    }

    const imageDivStyle = {
      width : '350px',
      height : '250px'
    };
    return (
      <div>
        <div class="col-sm-4" style={imageDivStyle}>
          <ClickCounter clickCount={count}/>
          <a class="thumbnail" href="#">
            <img class="img-responsive" onClick={this.handleClick.bind(this)} src={pictUrl} alt="Interest"/>
          </a>
        </div>
      </div>

    );
  }
}
