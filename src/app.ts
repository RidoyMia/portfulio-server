import express, { Application,NextFunction,Request,Response } from "express"
import cors from "cors"
import projectRouter from "./app/module/Project/Project.route"



const app : Application = express()
app.use(cors({
  origin: ['http://localhost:5173','https://car-pats-client.vercel.app'],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',

  allowedHeaders: 'Content-Type, accesstoken',
 
  
}))
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

app.use('/api/v1/project',projectRouter)
app.use('/',async(req:Request,res:Response)=>{
    res.status(400).send({
       result : 'app is running'
    })
})


app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({
      success: false,
      message: 'Not Found',
      errorMessages: [
        {
          path: req.originalUrl,
          message: 'API Not Found',
        },
      ],
    });
    next();
  });


  export default app;