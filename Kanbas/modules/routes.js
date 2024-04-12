import * as dao from "./dao.js";

function ModuleRoutes(app) {
  const getModulesByCid = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModuleByCid(cid)
    res.send(modules);
  }

  const addModuleByCid = async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      id: new Date().getTime().toString(),
    };
    await dao.createModule(newModule)
    res.send(newModule);
  }

  const deleteModuleByMid = async (req, res) => {
    const { mid } = req.params;
    await dao.deleteModule(mid)
    res.sendStatus(200);
  }

  const updateModuleByMid = async (req, res) => {
    const { mid } = req.params;
    const module = req.body;
    await dao.updateModule(mid, module)
    res.sendStatus(204);
  }

  app.get("/api/courses/:cid/modules", getModulesByCid)
  app.post("/api/courses/:cid/modules", addModuleByCid)
  app.delete("/api/modules/:mid", deleteModuleByMid)
  app.put("/api/modules/:mid", updateModuleByMid)
}
export default ModuleRoutes;