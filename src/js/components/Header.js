import React from 'react';

import Logo from './Header/Logo';
import HomeButton from './Header/HomeButton';
import SearchBar from './Header/SearchBar';

export default class Header extends React.Component {

  render() {
    return (
      <div>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Logo/>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <HomeButton/>
            <SearchBar/>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}
