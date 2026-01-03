const express = require("express");
const router = express.Router();

const {
  addTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

router.get("/test", (req, res) => {
  res.send("Task route working");
});

router.post("/add", addTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
