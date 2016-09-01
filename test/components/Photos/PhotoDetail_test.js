import { renderComponent , expect } from '../../test_helper';
import PhotoDetail from './../../../src/components/Photos/PhotoDetail'


describe('components:: PhotoDetail', ()=> {
  let component;
  beforeEach(()=>{
    component = renderComponent(PhotoDetail);
  });

  it('exist', () => {
    expect(component).to.exist;
  });
});
