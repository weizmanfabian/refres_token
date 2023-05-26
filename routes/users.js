import { Router } from "express";
import auth from "../middleware/auth.js";
import roleCheck from "../middleware/roleCheck.js";
import User from "../models/User.js";

const router = Router();

router.get("/details", auth, async (req, res) => {
	try {
		const users = await User.find({})
		return res.status(200).json(users)
	} catch (err) {
		console.log(err)
		res.status(500).json({ err: true, msg: "Internal Server Error" });
	}
});

export default router;
