import model from "./model.js";
export const createModule = (module) => {
  delete module._id
  return model.create(module);
}
export const findModuleByCid = (courseId) => model.find({course: courseId});
export const deleteModule = (moduleId) => model.deleteOne({ id: moduleId });
export const updateModule = (moduleId, mod) => model.updateOne({ id: moduleId }, { $set: mod });
