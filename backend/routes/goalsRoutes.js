const express = require("express");
const router = express.Router();
const { getGoals, setGoals, updateGoal, deleteGoal } = require("../controllers/goalsController");

//  ---> Maneira mais enxuta de usar métodos HTTP diferentes para as mesmas rotas 
// router.route("/").get(getGoals).post(setGoals)
// router.route("/:id").put(updateGoal).delete(deleteGoal());

router.get("/", getGoals);

router.post("/", setGoals);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);


module.exports = router;