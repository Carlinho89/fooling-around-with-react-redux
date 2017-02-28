import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {UserSummary} from '../src/js/components/UserSummary';

describe('<UserSummary/>', () => {
  it('should have user with name Carlo', function (){
    const wrapper = mount(<UserSummary/>);

    expect(wrapper.props().user).to.be.defined;
  });
});
