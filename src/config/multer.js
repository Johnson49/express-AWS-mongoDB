const multer = require("multer");
const path = require("path");
const cryto = require("crypto");
// const { uuid } = require('uuidv4') baixar 

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp");

module.exports = {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (req, file, callback) => {
      
      function getFileExtension(filename) {
        return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
      }

      const hash = cryto.randomBytes(15).toString("hex");
      const extension = getFileExtension(file.originalname);
      const filename = `${hash}.${extension}`;
      // const fileName = `${uuid()}-${file.originalname}`

      return callback(null, filename);
    },
  }),
};
