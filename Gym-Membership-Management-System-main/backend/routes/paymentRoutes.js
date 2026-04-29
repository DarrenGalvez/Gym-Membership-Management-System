const express = require("express");
const router = express.Router();

const controller = require("../controllers/PaymentController");

// GET all payments
router.get("/", controller.getAll);

// GET payments by member
router.get("/member/:memberId", controller.getByMember);

// PROCESS payment
router.post("/", controller.process);

// DELETE payment
router.delete("/:id", controller.remove);

module.exports = router;