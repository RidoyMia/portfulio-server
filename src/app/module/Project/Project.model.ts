import express from "express"
import mongoose, { Schema } from "mongoose"
 
const projectScheema = new Schema({
    
    name : {
        type : String,
        required : true
    },
    picture : {
        type : String,
        required : true
    },
    descriptions : {
        type  : String,
        required : true
        },
        live : {
            type : String,
            required : true
        },
        client : {
            type : String,
            required : true
        },
        server : {
            type : String,
            required : true
        }
},{
    timestamps : true})


    export const ProjectModel = mongoose.model('project',projectScheema)
