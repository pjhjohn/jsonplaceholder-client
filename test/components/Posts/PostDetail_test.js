import { renderComponent , expect } from '../../test_helper';
import PostDetail from './../../../src/components/Posts/PostDetail'


describe('components:: PostDetail', ()=> {
  let component;
  beforeEach(()=>{
    component = renderComponent(PostDetail);
  });

  it('exist', () => {
    expect(component).to.exist;
  });
});
