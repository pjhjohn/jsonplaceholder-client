import { renderComponent , expect } from '../../test_helper';
import AlbumItem from './../../../src/components/Albums/AlbumItem'


describe('components:: AlbumItem', ()=> {
  let component;
  beforeEach(()=>{
    component = renderComponent(AlbumItem);
  });

  it('exist', () => {
    expect(component).to.exist;
  });
});
