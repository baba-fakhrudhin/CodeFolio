import mongoose from "mongoose";

// ================= PROJECT SCHEMA =================

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      default: "",
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    techStack: {
      type: [String],
      default: [],
    },

    repoLink: {
      type: String,
      default: "",
    },

    liveLink: {
      type: String,
      default: "",
    },

    screenshot: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// ================= USER SCHEMA =================

const userSchema = new mongoose.Schema(
  {
    // AUTH
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    // TEMPLATE
    templateId: {
      type: String,
      default: "minimal",
    },

    // PROFILE
    profile: {
      name: {
        type: String,
        trim: true,
        default: "",
      },

      bio: {
        type: String,
        trim: true,
        default: "",
      },

      avatar: {
        type: String,
        default: "",
      },

      resumeUrl: {
        type: String,
        default: "",
      },

      socialLinks: {
        github: {
          type: String,
          default: "",
        },

        linkedin: {
          type: String,
          default: "",
        },

        twitter: {
          type: String,
          default: "",
        },

        website: {
          type: String,
          default: "",
        },
      },
    },

    // SKILLS
    skills: {
      frontend: {
        type: [String],
        default: [],
      },

      backend: {
        type: [String],
        default: [],
      },

      devops: {
        type: [String],
        default: [],
      },
    },

    // PROJECTS
    projects: {
      type: [projectSchema],
      default: [],
    },

    // PREMIUM
   plan: {
  type: String,
  enum: ["free", "pro"],
  default: "free",
    },
  },
  {
    timestamps: true,
  }
);

// ================= EXPORT MODEL =================

const User = mongoose.model("User", userSchema);

export default User;