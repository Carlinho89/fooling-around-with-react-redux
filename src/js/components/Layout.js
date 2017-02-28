import React from 'react';

import Header from './Header';
import UserSummary from './UserSummary'
import Footer from './Footer';
import InterestTable from './InterestTable';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

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
