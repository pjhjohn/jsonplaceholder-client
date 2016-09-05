import { renderComponent , expect } from '../../test_helper';
import GithubIssue from './../../../src/components/Github/GithubIssue'


describe('components:: GithubIssue', ()=> {
  let component;
  beforeEach(()=>{
    component = renderComponent(GithubIssue);
  });

  it('exist', () => {
    expect(component).to.exist;
  });
});
