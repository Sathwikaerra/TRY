const mongoose=require('mongoose')

const url='mongodb+srv://user143:Sathwik143@cluster0.3baatam.mongodb.net/DETAILS?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(url).then(()=>console.log("db connected Succesfully")).catch((err)=>console.log(err));

