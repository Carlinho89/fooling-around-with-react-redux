import React, {Component} from 'react';
import expect from 'expect';
import {shallow, mount} from 'enzyme';

//These are used to pass a mock store down through nested components
//import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
//To spy functions
//import sinon from 'sinon';
//Component
import UserSummaryConnected, { UserSummary } from '../src/js/components/UserSummary';
//To Test Actions' Creators
import { getMockUser } from '../src/js/actions/userActions';
import store from '../src/js/store';

describe('<UserSummary/>', () => {

  it('should dispatch a \'FETCH_MOCK_USER\' when the button with \'id=\'test-me\'\' is clicked', function (){
    const initialState = {
      user:{
        id   : null,
        name : null,
        age  : null
      },
      userFetched : false
    };
    const nextState = {
      user:{
        id   : 1,
        name : 'Carlo',
        age  : 27
      },
      userFetched : true
    };
    const wrapper = mount(
      <Provider store={store}>
        <UserSummaryConnected/>
      </Provider>
    );

    expect(store.getState().user).toEqual(initialState);

    wrapper.find('button #login').simulate('click');

    expect(store.getState().user).toEqual(nextState);

  });

  it('should create an action of type:\'FETCH_MOCK_USER\'',() => {
    const expectedAction = {
      type: 'FETCH_MOCK_USER',
      payload: {
        id:1,
        name: 'Carlo',
        age: 27
      }
    }
    const body = getMockUser();
    expect(body).toEqual(expectedAction);
  });
});
