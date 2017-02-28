import React from 'react';

import Header from './Header';
import UserSummary from './UserSummary'
import Footer from './Footer';
import InterestTable from './InterestTable';
import {connect} from 'react-redux';

export default class Layout extends React.Component {
  componentWillMount(){}
  
  render() {

    return (
      <div>
        <Header/>
        <div class="container text-center">
          <UserSummary/>
          <InterestTable/>
        </div>
        <Footer/>
      </div>
    );
  }
}
