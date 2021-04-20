import express from "express";
import bodyParse from "body-parser";
import dotenv from 'dotenv';
import mongoose from 'mongoose'

import categoryRoute from './server/routes/categoryRoute';
import profileRoute from './server/routes/profileRoute';
import applicationRoute from './server/routes/applicationRoutes';




dotenv.config({path:'./.env'});

const app = express();

app.use(bodyParse.json());

app.use('/api/v1/category/dash',categoryRoute);
app.use('/api/v1/profile',profileRoute);
app.use('/api/v1/application',applicationRoute);

app.use('/',(req,res)=>{

   
    res.status(200).send({
        status:200,
        message:"Real Job routes not exist"
    })
})

const databaseUrl= process.env.DATABASE;

mongoose.connect(databaseUrl,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true, useFindAndModify:false}).then(()=>console.log("Database Connected Succefully"))


const port = process.env.PORT;
app.listen(port, ()=>{

console.log(`Server Is Running On Port ${port}`);

})

export default app;