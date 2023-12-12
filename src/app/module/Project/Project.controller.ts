import { NextFunction,Request,Response } from "express";
import { ProjectModel } from "./Project.model";

const createProject = async(req:Request,res:Response,next:NextFunction) =>{
  try {
    const project = req.body;
    const result = await ProjectModel.create(project);
    res.status(200).send({
        result
    })
  } catch (error) {
    res.status(400).send({
        message : 'something went wrong'
    })
  }
}
const getProject = async(req:Request,res:Response,next:NextFunction) =>{
    try {
      
      const result = await ProjectModel.find();
      res.status(200).send({
          result
      })
    } catch (error) {
      res.status(400).send({
          message : 'something went wrong'
      })
    }
  }
const getSingleProject = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        const id = req.params.id;
        const result = await ProjectModel.findById(id);
        res.status(200).send({
            result
        })
    } catch (error) {
        res.status(400).send({
            message : 'something went wrong'
        })
    }
}



export const projectController = {
    createProject,getProject,getSingleProject
}