import User from "../models/User.js";

// ================= GET PUBLIC PORTFOLIO =================

export const getPublicPortfolio = async (req, res) => {
  try {
    const { username } = req.params;

    // Find user by username
    const user = await User.findOne({
      username,
    }).select("-password");

    // Portfolio not found
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    // Send public portfolio data
    res.status(200).json({
      success: true,

      portfolio: {
        username: user.username,

        profile: user.profile,

        skills: user.skills,

        projects: user.projects,

        experience: user.experience,

        education: user.education,

        languages: user.languages,

        certifications: user.certifications,

        publications: user.publications,

        achievements: user.achievements,

        templateId: user.templateId,

        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.log("Get Portfolio Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};