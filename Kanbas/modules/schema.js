import mongoose from "mongoose";
const modulesSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: {type: String, unique: false},
    description: String,
    course: String,
    lessons: [{
      name: {type: String, required: true},
      description: String,
      module: String,
    }]
  },
  { collection: "modules" });
export default modulesSchema;