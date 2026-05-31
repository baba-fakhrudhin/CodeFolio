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
          tagline,
          location,
          phone,
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
          tagline,
          location,
          phone,
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
        returnDocument: "after",
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

// ================= GET SKILLS =================

export const getSkills = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("skills");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,

      skills: user.skills,
    });
  } catch (error) {
    console.log("Get Skills Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= UPDATE SKILLS =================

export const updateSkills = async (req, res) => {
  try {
    const { frontend, backend, devops } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      {
        skills: {
          frontend,
          backend,
          devops,
        },
      },
      {
         returnDocument: "after",
      }
    ).select("skills");

    res.status(200).json({
      success: true,
      message: "Skills updated successfully",

      skills: updatedUser.skills,
    });
  } catch (error) {
    console.log("Update Skills Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};