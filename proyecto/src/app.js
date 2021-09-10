import express from 'express';
import mongoose from 'mongoose';
import userRoutes from "./routes/UsersRoutes.js";
import userModel from "../src/models/UsersModel.js"
const app = express();
const port = 3001

app.use(express.json());

app.use(userRoutes);


app.listen(port, async () => {
    try {
        
      await mongoose.connect('mongodb://localhost:27017/db_pedaleandoPalabras', console.log("estoy entrando"), {
       
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
      } )
     
    }
    catch (e) {
      console.log("Error de conexión a la DB")
    }
    console.log(`Example app listening at http://localhost:${port}`)
  })



