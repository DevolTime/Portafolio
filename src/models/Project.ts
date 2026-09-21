import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
        technologies: {
            type: [String]
        },
        repoUrl: {
            type: String
        },
        liveUrl: {
            type: String
        }
    },
    { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);