import mongoose from "mongoose";

// Project Schema
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },

  techStack: [String],

  repoLink: {
    type: String,
  },

  liveLink: {
    type: String,
  },

  screenshot: {
    type: String,
  },
});

// Main User Schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    templateId: {
      type: String,
      default: "minimal",
    },

    profile: {
      name: {
        type: String,
      },

      bio: {
        type: String,
      },

      avatar: {
        type: String,
      },

      resumeUrl: {
        type: String,
      },

      socialLinks: {
        github: String,
        linkedin: String,
        twitter: String,
        website: String,
      },
    },

    skills: {
      frontend: [String],
      backend: [String],
      devops: [String],
    },

    projects: [projectSchema],

    isPro: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Export Model
const User = mongoose.model("User", userSchema);

export default User;