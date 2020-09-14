import mongoose from "mongoose";
const tiktoSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  message: String,
  description: String,
  share: String,
});

//Collection inside the DB
export default mongoose.model("tiktokVideos", tiktoSchema);
