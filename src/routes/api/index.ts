import express from 'express';
import { WebImage } from '../../interfaces/image';
import { resizeImage } from '../../utilities/sharpUtils';

const routes = express.Router();
routes.get('/api', (req, res) => {
  res.send("<html><body><h2>Welcome to Image Processing</h2></body></html>");
})

routes.get('/api/images', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');

  let query = req.query;
  let image:WebImage = {
    fileName: query.img as string,
    width: (query.width as unknown) as number,
    height: (query.height as unknown) as number
  };

  function getPath(image:WebImage, dir:string) {
    resizeImage(image, dir)
    .then((path) => {
      res.sendFile(path);
    })
    .catch(() => {
      res.send("We could not locate the file you've specified. Please add image to folder or check spelling.");
    });  
  }; 

  getPath(image, __dirname);
});

export default routes;