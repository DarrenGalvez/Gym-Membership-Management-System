const express = require("express");
const router = express.Router();

const controller = require("../controllers/scheduleController");

// GET all schedules
router.get("/", controller.getAll);

// CREATE schedule
router.post("/", controller.create);

// DELETE schedule
router.delete("/:id", controller.remove);

// SEARCH schedules
router.get("/search", controller.search);

module.exports = router;