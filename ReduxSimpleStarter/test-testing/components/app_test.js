import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// to group together similar tests
describe('App' , () => {
  let component;

  /*beforeEach(() => {
    component = renderComponent(App);
  });*/

  // test single attribute of a target
  it('shows the correct text', () => {
  	const component = renderComponent(App);
    // make an assertion about a target
    expect(component).to.contain('React simple starter');
  });
});
