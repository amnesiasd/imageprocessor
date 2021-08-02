import fsPromise from 'fs/promises';

const getImages = async (): Promise<string[]> => {
  return new Promise(async (resolve) => {
    let images: string[] = [];
    let location = fsPromise.readdir('././src/routes/api/images');
    for (const loc of await location) {
      images.push(loc);
    }
    resolve(images);
  });
};

export { getImages };
