import express from 'express';
import { create_review, get_reviews } from '../controller/reviewController.js';
import auth from '../middleware/AuthMiddleWare.js'
const router = express.Router();

router.post("/create-review",auth,create_review);
router.get("/get-all-reviews",get_reviews);

export default router;