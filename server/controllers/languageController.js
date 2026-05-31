import User from "../models/User.js";

// ================= ADD LANGUAGE =================

export const addLanguage = async (req, res) => {
  try {
    const { name, proficiency } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.languages.push({
      name,
      proficiency,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Language added successfully",
      languages: user.languages,
    });
  } catch (error) {
    console.log("Add Language Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= GET LANGUAGES =================

export const getLanguages = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    res.status(200).json({
      success: true,
      languages: user.languages,
    });
  } catch (error) {
    console.log("Get Languages Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= UPDATE LANGUAGE =================

export const updateLanguage = async (req, res) => {
  try {
    const { languageId } = req.params;
    const { name, proficiency } = req.body;

    const user = await User.findById(req.userId);

    const language = user.languages.id(languageId);

    if (!language) {
      return res.status(404).json({
        success: false,
        message: "Language not found",
      });
    }

    language.name = name || language.name;
    language.proficiency = proficiency || language.proficiency;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Language updated successfully",
      languages: user.languages,
    });
  } catch (error) {
    console.log("Update Language Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= DELETE LANGUAGE =================

export const deleteLanguage = async (req, res) => {
  try {
    const { languageId } = req.params;

    const user = await User.findById(req.userId);

    user.languages = user.languages.filter(
      (lang) => lang._id.toString() !== languageId
    );

    await user.save();

    res.status(200).json({
      success: true,
      message: "Language deleted successfully",
      languages: user.languages,
    });
  } catch (error) {
    console.log("Delete Language Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};