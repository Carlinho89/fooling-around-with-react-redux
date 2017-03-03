import React from 'react';

class Logo extends React.Component{
    render(){
      return (
        <div>
          <a class='navbar-brand' href='#'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/52/Free_logo.svg' class='img-circle' alt='Free Logo' width='50' height='35'/>
          </a>
        </div>
      );
    }
}

export default Logo;
