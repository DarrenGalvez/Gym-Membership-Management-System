// backend/controllers/MemberController.js

const pool = require("../db/dbConnection");

// GET ALL MEMBERS
exports.getAll = async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM members ORDER BY member_id ASC"
  );
  res.json(result.rows);
};

// GET ONE MEMBER
exports.getOne = async (req, res) => {
  const { id } = req.params;

  const result = await pool.query(
    "SELECT * FROM members WHERE member_id = $1",
    [id]
  );

  res.json(result.rows[0] || null);
};

// CREATE MEMBER
exports.create = async (req, res) => {
  const { name, email, plan_id, trainer_id } = req.body;

  const result = await pool.query(
    `INSERT INTO members (name, email, plan_id, trainer_id)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [name, email, plan_id, trainer_id]
  );

  res.json(result.rows[0]);
};

// UPDATE MEMBER
exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, email, plan_id, trainer_id } = req.body;

  const result = await pool.query(
    `UPDATE members
     SET name=$1, email=$2, plan_id=$3, trainer_id=$4
     WHERE member_id=$5
     RETURNING *`,
    [name, email, plan_id, trainer_id, id]
  );

  res.json(result.rows[0]);
};

// DELETE MEMBER
exports.remove = async (req, res) => {
  const { id } = req.params;

  await pool.query("DELETE FROM members WHERE member_id=$1", [id]);

  res.json({ message: "Member deleted" });
};

// SEARCH MEMBER BY NAME
exports.search = async (req, res) => {
  const { name } = req.query;

  const result = await pool.query(
    "SELECT * FROM members WHERE LOWER(name) = LOWER($1)",
    [name]
  );

  res.json(result.rows);
};