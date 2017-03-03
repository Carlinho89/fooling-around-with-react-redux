import React from 'react';

import Header from './Header';
import UserSummary from './UserSummary'
import Footer from './Footer';
import InterestTable from './InterestTable';

class InstaMock extends React.Component{
  render(){
    return (
      <div>
        <Header/>
        <div class='container text-center'>
          <UserSummary/>
          <InterestTable/>
        </div>
        <Footer/>
      </div>
      );
    }
  }


export default InstaMock;
