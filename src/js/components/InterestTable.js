import React from 'react';
import UserInterest from './InterestTable/UserInterest';

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
  render(){
    //Start Mock Data
    const interests = [
      "http://www.ricettapizzanapoletana.it/images/pizza-napoletana.jpg",
      "http://www.inter-news.it/files/2016/07/Logo-Inter-maglia-2016-2017.jpg",
      "http://dnest-inventors.eu/news/wp-content/uploads/2016/09/energia-marina.jpg",
      "https://uploads.toptal.io/blog/category/logo/291/react.png",
      "https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67",
      "http://static1.squarespace.com/static/569824005dc6def15849e064/t/56a192d5d82d5ee027b29693/1484696483894/"
    ];
    //End Mock Data

    const {totalCount} = this.state;
    return (
      <div class="row">
        <h2>totalCount = {totalCount}</h2>
        <div class="col-sm-12 well">
          { interests && interests.map((pictUrl, i) => (
            <UserInterest key={i} pictUrl={pictUrl} callBack={this.callBack.bind(this)}/>
          )}
        </div>
      </div>
    );
  }

}
