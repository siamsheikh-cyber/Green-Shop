import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true, trim: true, },
        slug: { type: String, required: true, unique: true, lowercase: true, trim: true, },
        description: { type: String, default: "", },
        status: { type: String, enum: ["active", "inactive"], default: "active", },
        image: {
            type: String, // category thumbnail image URL
            default: "",
        },
    },
    { timestamps: true }
);

// Prevent model overwrite error in Next.js hot reload
export default mongoose.models.Category ||
    mongoose.model("Category", CategorySchema);
