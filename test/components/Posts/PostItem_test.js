import { renderComponent , expect } from '../../test_helper';
import PostItem from './../../../src/components/Posts/PostDetail'


describe('components:: PostItem', ()=> {
  let component;
  beforeEach(()=>{
    component = renderComponent(PostItem);
  });

  it('exist', () => {
    expect(component).to.exist;
  });
});
