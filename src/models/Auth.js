import mongoose from "mongoose";

const { Schema } = mongoose;

const AuthSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
        },
        profilePhoto: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Auth || mongoose.model("Auth", AuthSchema);
