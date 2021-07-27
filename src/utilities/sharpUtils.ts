
import sharp from 'sharp';
import path from 'path';
import { WebImage } from '../interfaces/image';
import { nextTick } from 'process';

const resizeImage = async function(img:WebImage, dir:string) {
  let file = img.fileName.substr(0, img.fileName.length-4);
  let filePath = "test";
  await sharp(`src\\routes\\api\\images\\${img.fileName}`)
  .resize(Number(img.width), Number(img.height))
  .toFile(`src\\routes\\api\\images\\${file}_thumb.jpg`)
  .then((data) => {
    filePath = `${dir}\\images\\${file}_thumb.jpg`;
  });    
  return filePath;
  }  


export {resizeImage};