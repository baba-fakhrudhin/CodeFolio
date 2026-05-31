import User from "../models/User.js";

// ================= ADD EXPERIENCE =================

export const addExperience = async (req, res) => {
  try {
    const {
      company,
      role,
      startDate,
      endDate,
      description,
      skillsUsed,
    } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const newExperience = {
      company,
      role,
      startDate,
      endDate,
      description,
      skillsUsed,
    };

    user.experience.push(newExperience);

    await user.save();

    res.status(201).json({
      success: true,
      message: "Experience added successfully",

      experience: user.experience,
    });
  } catch (error) {
    console.log("Add Experience Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= GET EXPERIENCE =================

export const getExperience = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,

      experience: user.experience,
    });
  } catch (error) {
    console.log("Get Experience Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= UPDATE EXPERIENCE =================

export const updateExperience = async (req, res) => {
  try {
    const { experienceId } = req.params;

    const {
      company,
      role,
      startDate,
      endDate,
      description,
      skillsUsed,
    } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const experience = user.experience.id(experienceId);

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: "Experience not found",
      });
    }

    experience.company = company || experience.company;
    experience.role = role || experience.role;
    experience.startDate = startDate || experience.startDate;
    experience.endDate = endDate || experience.endDate;
    experience.description =
      description || experience.description;
    experience.skillsUsed =
      skillsUsed || experience.skillsUsed;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Experience updated successfully",

      experience: user.experience,
    });
  } catch (error) {
    console.log("Update Experience Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= DELETE EXPERIENCE =================

export const deleteExperience = async (req, res) => {
  try {
    const { experienceId } = req.params;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.experience = user.experience.filter(
      (exp) => exp._id.toString() !== experienceId
    );

    await user.save();

    res.status(200).json({
      success: true,
      message: "Experience deleted successfully",

      experience: user.experience,
    });
  } catch (error) {
    console.log("Delete Experience Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};