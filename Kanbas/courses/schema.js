import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema({
    id: String,
    name: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
  },
  { collection: "courses" });
export default coursesSchema;