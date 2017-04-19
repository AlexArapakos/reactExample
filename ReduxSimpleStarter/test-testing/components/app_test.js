import { renderComponent , expect } from '../test_helper';
import App from '../../src-testing/components/app';

// to group together similar tests
describe('App' , () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  // test single attribute of a target
  it('shows the comment box', () => {
    // make an assertion about a target
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows the comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });

});
