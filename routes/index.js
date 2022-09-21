import express from "express";
import { getShops, addShop } from "../controllers/index.js";
const router = express.Router();

router.route("/api").get(getShops);
router.route("/api").post(addShop);

export default router;
