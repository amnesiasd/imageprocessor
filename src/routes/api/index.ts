import express from 'express';
import { WebImage } from '../../interfaces/image';
import { getImages } from '../../utilities/indexUtils';
import { resizeImage } from '../../utilities/sharpUtils';

const routes = express.Router();

routes.get('/api/images', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  const getImageArray = async () => {
    const imgs = await getImages();    
    return imgs;
  };

  //getImageArray();
  let query = req.query;
  let image:WebImage = {
    fileName: query.img as string,
    width: (query.width as unknown) as number,
    height: (query.height as unknown) as number
  }
  let getPath = async () => {
    let path = await resizeImage(image, __dirname);
    res.sendFile(path);
  }
  getPath(); 
});

export default routes;