const mongoose = require("mongoose");

const VideoSchema = mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  describe: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
    unique: true,
  },
  status: {
    type: String,
    required: false,
  },
  createAt:{
    type: Date,
    default: Date.now()
  }
});

VideoSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString()
    delete returnedObj._id
    delete returnedObj.__v
  }
})


const Video = mongoose.model("Video", VideoSchema);
module.exports = Video;
