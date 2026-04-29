// backend/controllers/TrainerController.js

const pool = require("../db/dbConnection");

// GET ALL trainers
exports.getAll = async (req, res) => {
  const result = await pool.query("SELECT * FROM trainers ORDER BY trainer_id ASC");
  res.json(result.rows);
};

// GET ONE trainer
exports.getOne = async (req, res) => {
  const { id } = req.params;

  const result = await pool.query(
    "SELECT * FROM trainers WHERE trainer_id = $1",
    [id]
  );

  res.json(result.rows[0] || null);
};

// CREATE trainer
exports.create = async (req, res) => {
  const { trainer_id, name, email, specialty } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO trainers (trainer_id, name, email, specialty)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [trainer_id, name, email, specialty]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: "Trainer ID already exists or invalid data" });
  }
};

// UPDATE trainer
exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, email, specialty } = req.body;

  const result = await pool.query(
    `UPDATE trainers
     SET name=$1, email=$2, specialty=$3
     WHERE trainer_id=$4
     RETURNING *`,
    [name, email, specialty, id]
  );

  res.json(result.rows[0]);
};

// DELETE trainer
exports.remove = async (req, res) => {
  const { id } = req.params;

  await pool.query("DELETE FROM trainers WHERE trainer_id=$1", [id]);

  res.json({ message: "Trainer deleted" });
};

// SEARCH trainer by name
exports.search = async (req, res) => {
  const { name } = req.query;

  const result = await pool.query(
    "SELECT * FROM trainers WHERE LOWER(name) = LOWER($1)",
    [name]
  );

  res.json(result.rows);
};