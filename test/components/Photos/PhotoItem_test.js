import { renderComponent , expect } from '../../test_helper';
import PhotoItem from './../../../src/components/Photos/PhotoItem'


describe('components:: PhotoItem', ()=> {
  let component;
  beforeEach(()=>{
    component = renderComponent(PhotoItem);
  });

  it('exist', () => {
    expect(component).to.exist;
  });
});
