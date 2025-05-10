import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  rating: {
    type: Number,
    required: true,
    max:5,
    min:0
  },
  description: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("Review",reviewsSchema);
export default Review;