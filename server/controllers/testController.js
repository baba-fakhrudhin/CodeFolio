export const protectedRoute = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected route accessed",

    userId: req.userId,
  });
};