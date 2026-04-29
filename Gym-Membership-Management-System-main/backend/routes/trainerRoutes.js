const express = require("express");
const router = express.Router();

const controller = require("../controllers/TrainerController");

// GET all trainers
router.get("/", controller.getAll);

// GET one trainer
router.get("/:id", controller.getOne);

// CREATE trainer
router.post("/", controller.create);

// UPDATE trainer
router.put("/:id", controller.update);

// DELETE trainer
router.delete("/:id", controller.remove);

// SEARCH trainer by name
router.get("/search", controller.search);

module.exports = router;