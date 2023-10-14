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
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Prospect ||
    mongoose.model("Prospect", ProspectSchema);
