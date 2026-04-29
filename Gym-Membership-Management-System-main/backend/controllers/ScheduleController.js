const pool = require("../db/dbConnection");

// GET ALL
exports.getAll = async (req, res) => {
  const result = await pool.query(`
    SELECT 
      s.id,
      m.name AS member_name,
      t.name AS trainer_name,
      s.date,
      s.time,
      s.workout_type
    FROM schedules s
    LEFT JOIN members m ON s.member_id = m.member_id
    LEFT JOIN trainers t ON s.trainer_id = t.trainer_id
    ORDER BY s.id ASC
  `);

  res.json(result.rows);
};

// CREATE
exports.create = async (req, res) => {
  const { member_name, trainer_name, date, time, workout_type } = req.body;

  try {
    // 1. Convert MEMBER NAME → ID
    const memberResult = await pool.query(
      "SELECT member_id FROM members WHERE LOWER(name) = LOWER($1)",
      [member_name]
    );

    if (memberResult.rows.length === 0) {
      return res.status(400).json({ error: "Member not found" });
    }

    const member_id = memberResult.rows[0].member_id;

    // 2. Convert TRAINER NAME → ID
    const trainerResult = await pool.query(
      "SELECT trainer_id FROM trainers WHERE LOWER(name) = LOWER($1)",
      [trainer_name]
    );

    const trainer_id = trainerResult.rows[0]?.trainer_id || null;

    // 3. INSERT using IDs
    const result = await pool.query(
      `INSERT INTO schedules
       (member_id, trainer_id, date, time, workout_type)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [member_id, trainer_id, date, time, workout_type]
    );

    res.json(result.rows[0]);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.remove = async (req, res) => {
  const { id } = req.params;

  await pool.query("DELETE FROM schedules WHERE id=$1", [id]);

  res.json({ message: "Deleted" });
};

//SEARCH
exports.search = async (req, res) => {
  const { name } = req.query;

  const result = await pool.query(`
    SELECT 
      s.*,
      m.name AS member_name,
      t.name AS trainer_name
    FROM schedules s
    LEFT JOIN members m ON s.member_id = m.member_id
    LEFT JOIN trainers t ON s.trainer_id = t.trainer_id
    WHERE LOWER(m.name) = LOWER($1)
  `, [name]);

  res.json(result.rows);
};