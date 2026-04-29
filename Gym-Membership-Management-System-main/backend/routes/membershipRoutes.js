const express = require("express");
const router = express.Router();

const controller = require("../controllers/MembershipController");

// GET all membership plans
router.get("/", controller.getAll);

// GET one plan
router.get("/:id", controller.getOne);

// CREATE plan
router.post("/", controller.create);

// UPDATE plan
router.put("/:id", controller.update);

// DELETE plan
router.delete("/:id", controller.remove);

module.exports = router;