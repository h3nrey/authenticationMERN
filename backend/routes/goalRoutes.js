const express = require("express");
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal }  = require("../controllers/goalController")

// --- Short way of doing, if have repetead route can just do this and add the functions for each HTTP methods
router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

// --- Direct setting the methods ---
// router.get("/", getGoals);
// router.post("/", setGoal);
// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

module.exports = router;