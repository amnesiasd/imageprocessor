import {getImages} from '../utilities/indexUtils';

describe('Test for image files', () => {
  let response = Array<string>();
  beforeAll(async () => {
    response = await getImages();
  }),  
  it('should contain 5 files', () => {    
    expect(response.length).toBe(5);
  }),
  it('should be a jpg file', () => {
    expect(response[0].substr(-4)).toBe('.jpg');
  })
});
