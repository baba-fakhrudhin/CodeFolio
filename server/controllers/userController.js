import User from "../models/User.js";

// ================= GET CURRENT USER =================

export const getCurrentUser = async (req, res) => {
  try {
    // Find logged in user
    const user = await User.findById(req.userId).select("-password");

    // User not found
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Success response
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("Get Current User Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= UPDATE PROFILE =================

export const updateProfile = async (req, res) => {
  try {
    const {
      name,
      bio,
      avatar,
      resumeUrl,
      github,
      linkedin,
      twitter,
      website,
      templateId,
    } = req.body;

    // Update user profile
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      {
        profile: {
          name,
          bio,
          avatar,
          resumeUrl,

          socialLinks: {
            github,
            linkedin,
            twitter,
            website,
          },
        },

        templateId,
      },
      {
        new: true,
      }
    ).select("-password");

    // Success response
    res.status(200).json({
      success: true,
      message: "Profile updated successfully",

      user: updatedUser,
    });
  } catch (error) {
    console.log("Update Profile Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};