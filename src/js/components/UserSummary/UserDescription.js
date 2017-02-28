import React from 'react';

export default class UserDescription extends React.Component{
    render(){
      return (
        <div class="panel panel-default text-left well">
          <p class="text-center" contentEditable="true">Describe Yourself in few words!</p>
        </div>
      );
    }
}
