import {getImages} from '../utilities/indexUtils';
import supertest from 'supertest';
import app from '../index';


describe('Test for image files', () => {
  let response = Array<string>();
  beforeAll(async () => {
    response = await getImages();
  }),  
  it('should contain 5 files', () => {    
    expect(response.length).not.toBeLessThan(5);
  }),
  it('should be a jpg file', () => {
    expect(response[0].substr(-4)).toBe('.jpg');
  })
});

describe('Test for endpoint connection', () => {
  const request = supertest(app);
  describe('Test api routes', () => {
    it('gets the default api route', async () => {
      const response = await request.get('/api');
      expect(response.status).toBe(200);
    })
  })
})


