const mongoose = require("mongoose");

const viewSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            default: Date.now
        },
        viewer: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        course: {
            type: mongoose.Types.ObjectId,
            ref: "Course"
        },
        ipAddress: {
            type: String,
            trim: true,
        }
    }
);

mongoose.model("View", viewSchema);
