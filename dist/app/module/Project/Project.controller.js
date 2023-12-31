"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectController = void 0;
const Project_model_1 = require("./Project.model");
const createProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = req.body;
        const result = yield Project_model_1.ProjectModel.create(project);
        res.status(200).send({
            result
        });
    }
    catch (error) {
        res.status(400).send({
            message: 'something went wrong'
        });
    }
});
const getProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Project_model_1.ProjectModel.find();
        res.status(200).send({
            result
        });
    }
    catch (error) {
        res.status(400).send({
            message: 'something went wrong'
        });
    }
});
const getSingleProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield Project_model_1.ProjectModel.findById(id);
        res.status(200).send({
            result
        });
    }
    catch (error) {
        res.status(400).send({
            message: 'something went wrong'
        });
    }
});
exports.projectController = {
    createProject, getProject, getSingleProject
};
