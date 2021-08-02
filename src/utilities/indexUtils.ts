import { readdir } from 'fs/promises';

const getImages = async (): Promise<string[]> => {
  return new Promise(async (resolve) => {
    let images: string[] = [];
    await readdir('././src/routes/api/images')
    .then(locations => {
      for (let loc of locations) {
        images.push(loc);
      }      
    }) 
    .catch(err => {
      console.log(err);
    })   
    resolve(images);
  });
};

export { getImages };
