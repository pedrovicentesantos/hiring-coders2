import { readFile, writeFile } from 'fs';
import { resolve } from 'path';

const createRepository = (name) => {
  const path = resolve(__dirname, `../../data/${name}.json`);

  return {
    read: () =>
      new Promise((resolve, reject) => {
        readFile(path, (err, data) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(JSON.parse(data));
        });
      }),

    write: (data) =>
      new Promise((resolve, reject) => {
        writeFile(path, JSON.stringify(data), (err) => {
          if (err) {
            reject(err);
            return;
          }

          resolve();
        });
      })
  };
};

export default createRepository;
