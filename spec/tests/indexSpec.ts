import { getImages } from '../../src/utilities/indexUtils';
import supertest from 'supertest';
import app from '../../src/index';

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
    });
});

describe('Test for endpoint connection', () => {
  const request = supertest(app);
  describe('Test api routes', () => {
    it('gets the default api route', async () => {
      const response = await request.get('/api');
      expect(response.status).toBe(200);
    }),
    it('gets the default images route', async () => {
      const response = await request.get('/api/images');
      expect(response.status).toBe(200);
      expect(response.text).toContain("We could not");
    }),    
    it('returns could not find message if no file', async () => {
      const response = await request.get('/api/images');
      expect(response.text).toContain("We could not");
    });
  });
});
