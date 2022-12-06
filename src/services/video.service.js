const Video = require("../models/Video");

const getOne = (id) => Video.findById(id);

const getAll = (id) => Video.find();

const uploadVideo = (url) => Video.create({ url: url });

const edit = (id, title, describe, status) =>
  Video.findOneAndUpdate(
    { _id: id },
    {
      title,
      describe,
      status,
    }
  );

module.exports = {
  uploadVideo,
  getAll,
  getOne,
  edit,
};
