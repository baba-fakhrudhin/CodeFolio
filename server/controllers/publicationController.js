import User from "../models/User.js";

// ADD PUBLICATION
export const addPublication = async (req, res) => {
  try {
    const { title, description, link } = req.body;

    const user = await User.findById(req.userId);

    user.publications.push({
      title,
      description,
      link,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Publication added successfully",
      publications: user.publications,
    });
  } catch (error) {
    console.log("Add Publication Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// GET PUBLICATIONS
export const getPublications = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    res.status(200).json({
      success: true,
      publications: user.publications,
    });
  } catch (error) {
    console.log("Get Publications Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// UPDATE PUBLICATION
export const updatePublication = async (req, res) => {
  try {
    const { publicationId } = req.params;
    const { title, description, link } = req.body;

    const user = await User.findById(req.userId);

    const publication =
      user.publications.id(publicationId);

    if (!publication) {
      return res.status(404).json({
        success: false,
        message: "Publication not found",
      });
    }

    publication.title =
      title || publication.title;

    publication.description =
      description || publication.description;

    publication.link =
      link || publication.link;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Publication updated successfully",
      publications: user.publications,
    });
  } catch (error) {
    console.log("Update Publication Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// DELETE PUBLICATION
export const deletePublication = async (req, res) => {
  try {
    const { publicationId } = req.params;

    const user = await User.findById(req.userId);

    user.publications =
      user.publications.filter(
        (pub) =>
          pub._id.toString() !== publicationId
      );

    await user.save();

    res.status(200).json({
      success: true,
      message: "Publication deleted successfully",
      publications: user.publications,
    });
  } catch (error) {
    console.log("Delete Publication Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};