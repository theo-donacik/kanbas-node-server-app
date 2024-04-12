import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const getAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  }

  const newCourse = async (req, res) => {
    const course = { ...req.body,
      _id: new Date().getTime().toString() };
    await dao.createCourse(course)
    res.json(course);
  }

  const deleteCourseByID = async (req, res) => {
    const { id } = req.params;
    await dao.deleteCourse(id)
    res.send(204);
  }

  const updateCourseByID = async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    await dao.updateCourse(id, course)
    res.sendStatus(204);
  }

  const getCourseByID = async (req, res) => {
    const { id } = req.params;
    const course = await dao.findCourseById(id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.json(course);
  }

  app.get("/api/courses", getAllCourses)
  app.post("/api/courses", newCourse)
  app.delete("/api/courses/:id", deleteCourseByID)
  app.put("/api/courses/:id", updateCourseByID)
  app.get("/api/courses/:id", getCourseByID)
}