const asyncHandler = require("express-async-handler");

//Conect with Database
const Goal = require("../models/goalModel");

// @desc Get goals
// @route GET/api/goals
// @acess Private
const getGoals = asyncHandler(async(req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals); 
})

// @desc Set goals
// @route POST /api/goals
// @acess Private
const setGoals = asyncHandler(async(req, res) => {
  if(!req.body.text){
    res.status(400);
    throw new Error("Please fill the form correctly");
  }

  const goal = await Goal.create({
    text: req.body.text
  })
  console.log(req.body);
  res.status(201).json(goal);
})

// @desc Update goals
// @route PUT /api/goals/:id
// @acess Private
const updateGoal = asyncHandler(async(req, res) => {
  const goal = await Goal.findById(req.params.id);

  if(!goal) {
    res.status(400);
    throw new Error("Goal not found")
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true});

  res.status(200).json(updatedGoal);
})
// @desc delete goal
// @route DELETE /api/goals/:id
// @acess Private
const deleteGoal = asyncHandler(async(req, res) => {
  const goal = await Goal.findById(req.params.id);

  if(!goal) {
    res.status(400);
    throw new Error("Goal not found")
  }

  await goal.remove();

  res.status(200).json({message: `Goal: ${req.params.id} remove sucessfully`});
})


module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
}