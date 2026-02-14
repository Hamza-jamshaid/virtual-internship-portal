// const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sql } = require("../config/db");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await sql.query`
      SELECT * FROM users WHERE email = ${email}
    `;

    if (result.recordset.length === 0)
      return res.status(401).json({ message: "Invalid credentials" });

    const user = result.recordset[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
