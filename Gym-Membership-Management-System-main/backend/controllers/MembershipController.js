// backend/controllers/MembershipController.js

const pool = require("../db/dbConnection");

// GET ALL PLANS
exports.getAll = async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM membership_plans ORDER BY plan_id ASC"
  );
  res.json(result.rows);
};

// GET ONE PLAN
exports.getOne = async (req, res) => {
  const { id } = req.params;

  const result = await pool.query(
    "SELECT * FROM membership_plans WHERE plan_id = $1",
    [id]
  );

  res.json(result.rows[0] || null);
};

// CREATE PLAN
exports.create = async (req, res) => {
  const { plan_name, price, duration_months } = req.body;

  const result = await pool.query(
    `INSERT INTO membership_plans (plan_name, price, duration_months)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [plan_name, price, duration_months]
  );

  res.json(result.rows[0]);
};

// UPDATE PLAN
exports.update = async (req, res) => {
  const { id } = req.params;
  const { plan_name, price, duration_months } = req.body;

  const result = await pool.query(
    `UPDATE membership_plans
     SET plan_name=$1, price=$2, duration_months=$3
     WHERE plan_id=$4
     RETURNING *`,
    [plan_name, price, duration_months, id]
  );

  res.json(result.rows[0]);
};

// DELETE PLAN
exports.remove = async (req, res) => {
  const { id } = req.params;

  await pool.query(
    "DELETE FROM membership_plans WHERE plan_id=$1",
    [id]
  );

  res.json({ message: "Plan deleted" });
};