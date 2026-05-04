const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const authHeader = req.headers.authorization;

  if (!authHeader) {
  return res.status(401).json({ message: "No token" });
}

  try {
    const decoded = jwt.verify(token, "secret");
    req.user = decoded.id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
  console.log("HEADERS:", req.headers.authorization);
};