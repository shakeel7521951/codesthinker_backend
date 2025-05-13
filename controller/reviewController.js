import Review from "../Models/Reviews.js";

// Create a new review
export const create_review = async (req, res) => {
  try {
    const user = req.user.id;
    const { rating, description } = req.body;

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "You are not logged in, please login first",
      });
    }

    if (!rating || !description) {
      return res.status(400).json({
        success: false,
        message: "Rating and description are required",
      });
    }

    const newReview = new Review({ user: user, rating, description });
    await newReview.save();

    return res.status(201).json({
      success: true,
      message: "Review submitted successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error! Please try again later",
    });
  }
};

// Get all reviews
export const get_reviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("user", "name profilePic");

    if (reviews.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No Review Found!",
      });
    }

    return res.status(200).json({
      success: true,
      reviews,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later!",
    });
  }
};