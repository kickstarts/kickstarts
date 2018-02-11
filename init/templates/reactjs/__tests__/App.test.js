import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';

describe('Testing App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
