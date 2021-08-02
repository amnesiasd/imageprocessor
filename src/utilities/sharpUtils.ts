import sharp from 'sharp';
import { WebImage } from '../interfaces/image';

const resizeImage = async function (img: WebImage, dir: string) {
  let file = img.fileName.substr(0, img.fileName.length - 4);
  let filePath = `${dir}\\images\\${file}_thumb_${img.width}x${img.height}.jpg`;

  await sharp(`${dir}\\images\\${img.fileName}`)
    .resize(Number(img.width), Number(img.height))
    .toFile(filePath);
  return filePath;
};

export { resizeImage };
