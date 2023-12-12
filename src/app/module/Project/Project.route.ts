import express from "express"
import { projectController } from "./Project.controller";

const projectRouter = express.Router();
projectRouter.post('/create',projectController.createProject)
projectRouter.get('/single/:id',projectController.getSingleProject)
projectRouter.get('/all',projectController.getProject)


export default projectRouter;