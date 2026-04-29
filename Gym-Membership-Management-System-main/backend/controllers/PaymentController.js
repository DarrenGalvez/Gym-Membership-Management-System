// backend/controllers/PaymentController.js

const pool = require("../db/dbConnection");

// GET ALL PAYMENTS
exports.getAll = async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM payments ORDER BY payment_id ASC"
  );
  res.json(result.rows);
};

// GET PAYMENTS BY MEMBER
exports.getByMember = async (req, res) => {
  const { memberId } = req.params;

  const result = await pool.query(
    "SELECT * FROM payments WHERE member_id = $1",
    [memberId]
  );

  res.json(result.rows);
};

// PROCESS PAYMENT
exports.process = async (req, res) => {
  const { member_id, amount } = req.body;

  const payment_date = new Date();

  const result = await pool.query(
    `INSERT INTO payments (member_id, amount, payment_date)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [member_id, amount, payment_date]
  );

  res.json(result.rows[0]);
};

// DELETE PAYMENT
exports.remove = async (req, res) => {
  const { id } = req.params;

  await pool.query("DELETE FROM payments WHERE payment_id = $1", [id]);

  res.json({ message: "Payment deleted" });
};