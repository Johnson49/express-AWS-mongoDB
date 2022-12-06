const video_service = require("../services/video.service");

const edit = async (req, res) => {
  const video = await video_service.create(req.body);
  res.status(201).json({
    mensagem: "Video salvo com sucessor",
    video,
  });
};

const upload = async (req, res) => {
  const video = await video_service.uploadVideo(req.file.location);
  res.status(201).send({
    mensagem: "Video salvo com sucessor",
    video,
  });
};

const getAll = async (req, res) => {
  const videos = await video_service.getAll();
  res.status(200).json({ videos });
};

const getOne = async (req, res) => {
    const video = req.video
    res.status(200).json({ video });
  
};

const update = async (req, res) => {
  const id  = req.id;
  const { title, describe, status } = req.body;

  const video = await video_service.edit(id, title, describe, status);

  res.status(200).json({ update: true, mensagem: "video atualizado com sucessor." });
};
module.exports = {
  edit,
  upload,
  getAll,
  getOne,
  update,
};
