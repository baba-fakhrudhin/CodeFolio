import User from "../models/User.js";

// ================= ADD PROJECT =================

export const addProject = async (req, res) => {
  try {
    const {
      title,
      description,
      techStack,
      repoLink,
      liveLink,
      screenshot,
    } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const newProject = {
      title,
      description,
      techStack,
      repoLink,
      liveLink,
      screenshot,
    };

    user.projects.push(newProject);

    await user.save();

    res.status(201).json({
      success: true,
      message: "Project added successfully",

      projects: user.projects,
    });
  } catch (error) {
    console.log("Add Project Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= GET PROJECTS =================

export const getProjects = async (req, res) => {
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

      projects: user.projects,
    });
  } catch (error) {
    console.log("Get Projects Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= UPDATE PROJECT =================

export const updateProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    const {
      title,
      description,
      techStack,
      repoLink,
      liveLink,
      screenshot,
    } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const project = user.projects.id(projectId);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    project.title = title || project.title;
    project.description = description || project.description;
    project.techStack = techStack || project.techStack;
    project.repoLink = repoLink || project.repoLink;
    project.liveLink = liveLink || project.liveLink;
    project.screenshot = screenshot || project.screenshot;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Project updated successfully",

      projects: user.projects,
    });
  } catch (error) {
    console.log("Update Project Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= DELETE PROJECT =================

export const deleteProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.projects = user.projects.filter(
      (project) => project._id.toString() !== projectId
    );

    await user.save();

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",

      projects: user.projects,
    });
  } catch (error) {
    console.log("Delete Project Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};