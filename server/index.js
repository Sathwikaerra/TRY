const express=require('express')
const app=express()
const path=require('path')
const mongoose=require('mongoose')
const schema=require('./schema')
const cors=require('cors')
app.use(cors())
app.use(express.json())



mongoose.connect('mongodb://127.0.0.1:27017/Authentication').then(r=>console.log('conneted succesfully'))




app.post('/login',(req,res)=>{
    const {email,password}=req.body
    
    schema.findOne({email:email}).then(user=>{
        if(user)
        {
            if(user.password===password)
            {
               res.json("success")
            }
            else
            {
                res.json("password in correct");
            }
        }
        else{

                 res.json("User not found");
        }
    
    })
})







app.post('/signup',(req,res)=>{
    schema.create(req.body).then(emp=>res.json(emp)).catch(err=>res.json(err))

})



app.listen(8000,()=>{
    console.log("listening")
})
