import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'; // enzyme uses renderer under the hood, so don't want/need both
import Search from '../Search.js';

// Jest is Jasmine under the hood

// Test functions can be used instead of 'describe' and 'it'
// all a matter of preference
// with renderer, no shallow
test('Search renders correctly', () => {
  const component = renderer.create(<Search />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
// will make a snapshot of the file as it currently exists and store it within the test folder
// if the file changes in the future (which is likely) run "jest -u" to update the snapshot on file
// see package.json for commands


// with shallow
// enzyme will check if the component is rendered with specific props, but will not dive down into the specific props
test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

// Enzyme has several levels of testing: shallow, render, static
// render emulates DOM
// static brings in Cheerio to use ajax calls in the tests
