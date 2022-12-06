const routes = require("express").Router();
const controller = require("../controllers/video.controllers");
const S3Upload = require("../services/aws/S3AWS");
const valid = require("../middlewares/global.middlewares");

routes.post(
  "/api/v1/video/edit",
  valid.validID,
  valid.validVideo,
  controller.edit
);
routes.post("/api/v1/video/upload", S3Upload.single("file"), controller.upload);
routes.get("/api/v1/videos", controller.getAll);
routes.get(
  "/api/v1/video/:id",
  valid.validID,
  valid.validVideo,
  controller.getOne
);
routes.patch(
  "/api/v1/video/edit/:id",
  valid.validID,
  valid.validVideo,
  controller.update
);

// const multerConfig = require("../config/multer");
// const multer = require("multer");

// const upload = multer(multerConfig);
// routes.post("/api/v1/video/upload", upload.single("file"), (req, res) => {
//   res.send("upload realizado com sucessor.");
// });

// routes.post("/api/v1/video/teste", S3Upload.single("file"), (req, res) => {
//  console.log(req.file)
//  res.status(201).json({sucessor: true,
//   mensagem: "Upload realizado com sucessor",
//   url: req.file.location,
//   horário: Date.now().toString()})
// });

module.exports = routes;
