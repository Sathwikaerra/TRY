const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    email:String,
    password:String,
})

const schema=mongoose.model("registration",UserSchema)


module.exports=schema;