import React from 'react';
import { connect } from 'react-redux'

import { getMockInterests } from '../actions/interestActions'
import UserInterest from './InterestTable/UserInterest';

@connect((store) => {
  return{
    interests: store.interests.interests,
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

  loadMockInterests(){
    this.props.dispatch(getMockInterests());
  }
  render(){
    const { interests }  = this.props;
    const { totalCount } = this.state;
    if (interests.length === 0) {
      return (
        <div>
          {' '}
          <button type='button' class='btn btn-primary' onClick={this.loadMockInterests.bind(this)}>Load Mock Interests</button>
          {' '}
        </div>
      )
    }
    return (
      <div class='row'>
        <h2>totalCount = {totalCount}</h2>
        <div class='col-sm-12 well'>
          { (interests.length > 0) && interests.map((interest, i) => (
            <UserInterest key={i} pictUrl={interest.interestURL} callBack={this.callBack.bind(this)}/>
          ))}
        </div>
      </div>
    );
  }

}
