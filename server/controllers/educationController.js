import User from "../models/User.js";

// ================= ADD EDUCATION =================

export const addEducation = async (req, res) => {
  try {
    const {
      institution,
      degree,
      startYear,
      endYear,
    } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const newEducation = {
      institution,
      degree,
      startYear,
      endYear,
    };

    user.education.push(newEducation);

    await user.save();

    res.status(201).json({
      success: true,
      message: "Education added successfully",

      education: user.education,
    });
  } catch (error) {
    console.log("Add Education Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= GET EDUCATION =================

export const getEducation = async (req, res) => {
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

      education: user.education,
    });
  } catch (error) {
    console.log("Get Education Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= UPDATE EDUCATION =================

export const updateEducation = async (req, res) => {
  try {
    const { educationId } = req.params;

    const {
      institution,
      degree,
      startYear,
      endYear,
    } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const education = user.education.id(educationId);

    if (!education) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    education.institution =
      institution || education.institution;

    education.degree =
      degree || education.degree;

    education.startYear =
      startYear || education.startYear;

    education.endYear =
      endYear || education.endYear;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Education updated successfully",

      education: user.education,
    });
  } catch (error) {
    console.log("Update Education Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= DELETE EDUCATION =================

export const deleteEducation = async (req, res) => {
  try {
    const { educationId } = req.params;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.education = user.education.filter(
      (edu) => edu._id.toString() !== educationId
    );

    await user.save();

    res.status(200).json({
      success: true,
      message: "Education deleted successfully",

      education: user.education,
    });
  } catch (error) {
    console.log("Delete Education Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};