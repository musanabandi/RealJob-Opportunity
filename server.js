import express from "express";
import bodyParse from "body-parser";
import dotenv from 'dotenv';
import mongoose from 'mongoose'

dotenv.config({path:'./.env'});

const app = express();

app.use(bodyParse.json());

app.use('/',(req,res)=>{

   
    res.status(200).send({
        status:200,
        message:"Real Job routes not exist"
    })
})

const databaseUrl= process.env.DATABASE;

mongoose.connect(databaseUrl,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true, useFindAndModify:false}).then(()=>console.log("DataBase Connected Succefully"))


const port = process.env.PORT;
app.listen(port, ()=>{

console.log(`Server Is Running On Port ${port}`);

})

export default app;