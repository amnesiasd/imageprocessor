import express from 'express';
import { WebImage } from '../../interfaces/image';
import { getImages } from '../../utilities/indexUtils';
const routes = express.Router();

routes.get('/api', (req, res) => {
  const getImageArray = async () => {
  const imgs = await getImages();
  res.send(imgs[1]);
  return imgs;
};

getImageArray();
let query = req.query;
let image:WebImage = {
  fileName: query.img as string,
  width: (query.width as unknown) as number,
  height: (query.height as unknown) as number
}
console.log(image);
});

export default routes;