import React from 'react';
import { connect } from 'react-redux'

import { getMockInterests } from '../actions/interestActions'
import UserInterest from './InterestTable/UserInterest';

@connect((store) => {
  return{
    interestsURLs: store.interests.interestsURLs,
    fetched: store.interests.fetched,
  }
})
export default class InterestTable extends React.Component{
  constructor(){
    super();
    this.state = {
      totalCount : 0
    }
  }

  callBack(){
    const {totalCount} = this.state;
    this.setState({
      totalCount : totalCount + 1
    });
  }

  componentDidMount(){
    console.log('interests: ');
    console.log(this.props);

  }

  loadMockInterests(){
    this.props.dispatch(getMockInterests());
  }
  render(){
    //Start Mock Data
    const { interestsURLs } = this.props;
    console.log('re-rendering: props are...');
    console.log(this.props);
    console.log('interestsURLs length is: ' + interestsURLs.length);
    console.log(interestsURLs);
    if (interestsURLs.length > 0) {
      const mappedURLS = interestsURLs.map((pictUrl, i) => (
        <UserInterest key={i} pictUrl={pictUrl} callBack={this.callBack.bind(this)}/>
      ));
      console.log(mappedURLS);
    }
    //End Mock Data

    const { totalCount } = this.state;
    if (interestsURLs.length === 0) {
      return (
        <div>
          {' '}
          <button type="button" class="btn btn-primary" onClick={this.loadMockInterests.bind(this)}>Load Mock Interests</button>
          {' '}
        </div>
      )
    }
    return (
      <div class="row">
        <h2>totalCount = {totalCount}</h2>
        <div class="col-sm-12 well">
          { (interestsURLs.length > 0) && interestsURLs.map((pictUrl, i) => (
            <UserInterest key={i} pictUrl={pictUrl} callBack={this.callBack.bind(this)}/>
          ))}
        </div>
      </div>
    );
  }

}
