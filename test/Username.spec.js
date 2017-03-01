import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Username from '../src/js/components/UserSummary/Username';

describe('<Username/>', () => {
  it('should have props defined', function () {
    const wrapper = mount(<Username/>);
    expect(wrapper.props().email).to.be.defined;

    
  });
});
