import User from "../models/User.js";

// ADD ACHIEVEMENT
export const addAchievement = async (req, res) => {
  try {
    const { title, description } = req.body;

    const user = await User.findById(req.userId);

    user.achievements.push({
      title,
      description,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Achievement added successfully",
      achievements: user.achievements,
    });
  } catch (error) {
    console.log("Add Achievement Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// GET ACHIEVEMENTS
export const getAchievements = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    res.status(200).json({
      success: true,
      achievements: user.achievements,
    });
  } catch (error) {
    console.log("Get Achievements Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// UPDATE ACHIEVEMENT
export const updateAchievement = async (req, res) => {
  try {
    const { achievementId } = req.params;

    const { title, description } = req.body;

    const user = await User.findById(req.userId);

    const achievement =
      user.achievements.id(achievementId);

    if (!achievement) {
      return res.status(404).json({
        success: false,
        message: "Achievement not found",
      });
    }

    achievement.title =
      title || achievement.title;

    achievement.description =
      description || achievement.description;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Achievement updated successfully",
      achievements: user.achievements,
    });
  } catch (error) {
    console.log("Update Achievement Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// DELETE ACHIEVEMENT
export const deleteAchievement = async (req, res) => {
  try {
    const { achievementId } = req.params;

    const user = await User.findById(req.userId);

    user.achievements =
      user.achievements.filter(
        (ach) =>
          ach._id.toString() !== achievementId
      );

    await user.save();

    res.status(200).json({
      success: true,
      message: "Achievement deleted successfully",
      achievements: user.achievements,
    });
  } catch (error) {
    console.log("Delete Achievement Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};