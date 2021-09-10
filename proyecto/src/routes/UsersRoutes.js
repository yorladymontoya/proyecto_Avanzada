import express from "express";
import router from "express";
import {login} from "../controllers/UsersController.js"
import users from "../models/UsersModel.js";
const userRoutes = router();

userRoutes.post('/register', async(req, res) => {
   const {email,password} = req.body
    const usuario = new users({
        email:email,
        password:password
    });
    await usuario.save();
    //res.json(data);
    //const inComingdata = req.query;
    //const data = users.find({email:inComingdata.email})
    res.json("mas o menos");
  })
 
  userRoutes.get('/login',async (req,res)=>{
    
    try{
        let dato = login(req.query);
        let datos = await dato;
        console.log(datos)
        res.json(datos)
    }
    catch(e){
        console.log(e);
    }
  })
 

  export default userRoutes;