import {getImages} from "./utilities/indexUtils";

const displayImages = async () => {
  const imgs = await getImages();
  console.log(imgs);
} 
displayImages();
