import React from 'react';
import { connect } from 'react-redux'

import { getMockInterests } from '../actions/interestActions'
import { interestClickInc, interestGlobalClickInc } from '../actions/interestActions';

import UserInterest from './InterestTable/UserInterest';


class InterestTable extends React.Component{
  loadMockInterests(){
    this.props.dispatch(getMockInterests());
  }
  onClickCount(id){
    this.props.dispatch(interestClickInc(id));
  }
  render(){
    const { interests, totalCount }  = this.props;

    console.log('props: ');
    console.log(this.props);
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
            <UserInterest key={i} pictUrl={interest.interestURL} onClickCount={this.onClickCount.bind(this)} clicks={interest.clicks} interestId={i}/>
          ))}
        </div>
      </div>
    );
  }

}

const ConnectedInterestTable = connect((store) => {
  return{
    interests: store.interests.interests,
    fetched: store.interests.fetched,
    totalCount: store.interests.totalCount
  }
})(InterestTable);

export default ConnectedInterestTable;
