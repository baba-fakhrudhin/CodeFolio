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

// Experience Schema
const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
  },

  role: {
    type: String,
  },

  startDate: {
    type: String,
  },

  endDate: {
    type: String,
  },

  description: {
    type: String,
  },

  skillsUsed: [String],
});


// Education Schema
const educationSchema = new mongoose.Schema({
  institution: {
    type: String,
  },

  degree: {
    type: String,
  },

  startYear: {
    type: String,
  },

  endYear: {
    type: String,
  },
});


// Languages Schema
const languageSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  proficiency: {
    type: String,
  },
});

// Certification Schema
const certificationSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  issuer: {
    type: String,
  },

  issueDate: {
    type: String,
  },

  credentialUrl: {
    type: String,
  },
});

// Achievement Schema
const achievementSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },
});


// Publication Schema
const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },

  link: {
    type: String,
  },
});




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
      tagline: {
        type: String,
      },

      location: {
        type: String,
      },

      phone: {
        type: String,
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



    // EXPERIENCE
    experience: {
      type: [experienceSchema],
      default: [],
    },

    // EDUCATION
    education: {
      type: [educationSchema],
      default: [],
    },

    // LANGUAGES
    languages: {
      type: [languageSchema],
      default: [],
    },

    // CERTIFICATIONS
    certifications: {
      type: [certificationSchema],
      default: [],
    },

    // PUBLICATIONS
    publications: {
      type: [publicationSchema],
      default: [],
    },

    // ACHIEVEMENTS
    achievements: {
      type: [achievementSchema],
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