const express = require("express");
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal }  = require("../controllers/goalController")
const { protect } = require("../middleware/authMiddleware")

// --- Short way of doing, if have repetead route can just do this and add the functions for each HTTP methods
router.route("/").get(protect, getGoals).post(protect,setGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

// --- Direct setting the methods ---
// router.get("/", getGoals);
// router.post("/", setGoal);
// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

module.exports = router;