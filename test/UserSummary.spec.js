import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import expect from 'expect';

import ReactTestUtils from 'react-addons-test-utils';
import {shallow, mount} from 'enzyme';

//These are used to pass a mock store down through nested components
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

//Component
import UserSummaryConnected, {UserSummary} from '../src/js/components/UserSummary';

//Uncomplete
describe('<UserSummaryConnected/>', () => {
  it('should have user with name Carlo', function (){
    const mockStore = configureStore([]);
    const store = mockStore({});
    const wrapper = shallow(
      <Provider store={store}>
        <UserSummaryConnected/>
      </Provider>);
    wrapper.find('#test-me').simulate('click');
    expect(wrapper.text()).toBe('<Connect(UserSummary) />');
  });
});
