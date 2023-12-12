import mongoose from "mongoose";
import app from "./app";

async function boostrap() {
    try {
        await mongoose.connect('mongodb+srv://portfulio:portfulio@cluster0.qx86yyj.mongodb.net/?retryWrites=true&w=majority')
        app.listen(5000, () => {
            console.log(`Application  listening on port 5000`)
          })
    } catch (error) {
       console.log('connected error'); 
    }
}
boostrap()