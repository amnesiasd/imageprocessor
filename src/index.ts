import {getImages} from "./utilities/indexUtils";
import express from 'express';
import { WebImage } from "./interfaces/image";
import routes from './routes/api/index';

const app = express();
const port = 3000; 

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

app.use('/', routes);

export default app;

