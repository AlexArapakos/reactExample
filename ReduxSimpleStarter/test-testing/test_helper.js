/********** Setup testing environment to run like a browser in the command-line ********/
import jsdom from 'jsdom';
import _$ from 'jquery';
// html's window === terminal's global
// create an html document in terminal
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// add the html document inside window
global.window = global.document.defaultView;
// allow testing environment to use jquery
const $ = _$(global.window);


/********** build 'renderComponent' helper that should render a given react class ********/
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src-testing/reducers/index';
function renderComponent(ComponentClass, props, state) {
  // create a rendered instance of componentClass
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  // produces HTML
  return $(ReactDOM.findDOMNode(componentInstance)); 
}


/********** Build helper for simulating events ********/
// add function simulate to every instance of jquery by default
$.fn.simulate = function (eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}


/********** Setup chai-jquery ********/
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
// bind chaiJquery with chai & jquery
chaiJquery(chai, chai.util, $);


/********** export functions ********/
export { renderComponent, expect };