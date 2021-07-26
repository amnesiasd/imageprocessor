import {getImages} from "./utilities/indexUtils";
import express from 'express';

const app = express();
const port = 3000;

const getImageArray = () => {
  const imgs = getImages();
  return imgs;
}; 

app.get('/api', (req, res) => {
  
  const getImageArray = async () => {
    const imgs = await getImages();
    res.send(imgs[1]);
  };
  getImageArray();
  console.log(req.query);
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});



//getImageArray();
