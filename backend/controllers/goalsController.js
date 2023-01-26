const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET/api/goals
// @acess Private
const getGoals = asyncHandler(async(req, res) => {
  res.status(200).json({message: "Get goals"}); 
})

// @desc Set goals
// @route POST /api/goals
// @acess Private
const setGoals = asyncHandler(async(req, res) => {
  if(!req.body.data){
    res.status(400);
    throw new Error("Please fill the form correctly");
  }
  console.log(req.body);
  res.status(201).json({message: "Set goal"});
})

// @desc Update goals
// @route PUT /api/goals/:id
// @acess Private
const updateGoal = asyncHandler(async(req, res) => {
  res.status(200).json({message: `Goal ${req.params.id} updated`});
})
// @desc delete goal
// @route DELETE /api/goals/:id
// @acess Private
const deleteGoal = asyncHandler(async(req, res) => {
  res.status(200).json({message: `Goal ${req.params.id} deleted`});
})


module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
}