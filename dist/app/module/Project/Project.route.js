"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Project_controller_1 = require("./Project.controller");
const projectRouter = express_1.default.Router();
projectRouter.post('/create', Project_controller_1.projectController.createProject);
projectRouter.get('/all', Project_controller_1.projectController.getProject);
exports.default = projectRouter;
