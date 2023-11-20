import mongoose from "mongoose";

const { Schema } = mongoose;

const ProspectSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        country: {
            type: String,
        },
        tags: [
            {
                type: String,
            },
        ],
        customerValue: {
            type: String,
        },
        notes: {
            type: String,
        },
        avatar: {
            type: String,
        },
        facebook: {
            type: String,
        },
        website: {
            type: String,
        },
        linkedin: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Prospect ||
    mongoose.model("Prospect", ProspectSchema);
