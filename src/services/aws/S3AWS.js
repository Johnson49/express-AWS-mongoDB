const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

const S3 = new S3Client({
  region: process.env.AWS_DEFAULT_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const S3Upload = multer({
  storage: multerS3({
    s3: S3,
    bucket: process.env.AWS_BUCKET_NAME ,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    // acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const filename = `${uuidv4()}_${file.originalname}`;
      cb(null, filename);
    },
  }),
});

module.exports = S3Upload;