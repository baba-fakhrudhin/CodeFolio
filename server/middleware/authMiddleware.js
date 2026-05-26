import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  try {
    let token;

    // Check Authorization Header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // No Token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token",
      });
    }

    // Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user id to request
    req.userId = decoded.id;

    next();
  } catch (error) {
    console.log("Auth Middleware Error:", error);

    res.status(401).json({
      success: false,
      message: "Not authorized, invalid token",
    });
  }
};