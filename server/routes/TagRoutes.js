import express from "express";
import {
  CreateTag,
  DeleteTag,
  GetallTag,
} from "../controllers/TagController.js";

const router = express.Router();

// create route

router.route("/tag").get(GetallTag).post(CreateTag);

router.route("/tag/:id").delete(DeleteTag);

export default router;
