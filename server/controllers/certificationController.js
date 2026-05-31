import User from "../models/User.js";

// ================= ADD CERTIFICATION =================

export const addCertification = async (req, res) => {
  try {
    const {
      title,
      issuer,
      issueDate,
      credentialUrl,
    } = req.body;

    const user = await User.findById(req.userId);

    user.certifications.push({
      title,
      issuer,
      issueDate,
      credentialUrl,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Certification added successfully",
      certifications: user.certifications,
    });
  } catch (error) {
    console.log("Add Certification Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= GET CERTIFICATIONS =================

export const getCertifications = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    res.status(200).json({
      success: true,
      certifications: user.certifications,
    });
  } catch (error) {
    console.log("Get Certifications Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= UPDATE CERTIFICATION =================

export const updateCertification = async (req, res) => {
  try {
    const { certificationId } = req.params;

    const {
      title,
      issuer,
      issueDate,
      credentialUrl,
    } = req.body;

    const user = await User.findById(req.userId);

    const certification =
      user.certifications.id(certificationId);

    if (!certification) {
      return res.status(404).json({
        success: false,
        message: "Certification not found",
      });
    }

    certification.title =
      title || certification.title;

    certification.issuer =
      issuer || certification.issuer;

    certification.issueDate =
      issueDate || certification.issueDate;

    certification.credentialUrl =
      credentialUrl || certification.credentialUrl;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Certification updated successfully",
      certifications: user.certifications,
    });
  } catch (error) {
    console.log("Update Certification Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ================= DELETE CERTIFICATION =================

export const deleteCertification = async (req, res) => {
  try {
    const { certificationId } = req.params;

    const user = await User.findById(req.userId);

    user.certifications =
      user.certifications.filter(
        (cert) =>
          cert._id.toString() !== certificationId
      );

    await user.save();

    res.status(200).json({
      success: true,
      message: "Certification deleted successfully",
      certifications: user.certifications,
    });
  } catch (error) {
    console.log("Delete Certification Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};