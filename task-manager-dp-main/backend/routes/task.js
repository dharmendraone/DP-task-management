const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth");

const router = express.Router();

// Create Task
router.post("/", auth, async (req, res) => {
  try {
    const task = new Task({ ...req.body, createdBy: req.user });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Tasks (with pagination)
router.get("/", auth, async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const tasks = await Task.find({ assignedTo: req.user })
      .populate("assignedTo", "username")
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const total = await Task.countDocuments({ assignedTo: req.user });
    res.json({ tasks, total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Task Details
router.get("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("assignedTo", "username");
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Task
router.put("/:id", auth, async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Task
router.delete("/:id", auth, async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Status
router.patch("/:id/status", auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.status = req.body.status;
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
