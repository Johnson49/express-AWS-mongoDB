const mongoose = require("mongoose");
const video_service = require("../services/video.service");

const validID = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({ mensagem: "id invalido" });
  }
  next();
};


const validVideo =  async (req, res, next) => {
  const { id } = req.params;
  const video = await video_service.getOne(id);
    if(!video){
      return res.status(404).json({mensagem: "Video não existe."})
    }

    req.id = id
    req.video = video;

  next();
};


module.exports = {
    validID,
    validVideo
}
