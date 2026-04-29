const express = require("express");
const router = express.Router();

const controller = require("../controllers/MemberController");

// GET all members
router.get("/", controller.getAll);

// GET one member
router.get("/:id", controller.getOne);

// CREATE member
router.post("/", controller.create);

// UPDATE member
router.put("/:id", controller.update);

// DELETE member
router.delete("/:id", controller.remove);

// SEARCH member
router.get("/search", controller.search);

module.exports = router;