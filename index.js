const express = require("express");
const path = require('path');
const bodyParser = require('body-parser')


const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); //extend:true->enabled json

//Static
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,"node_modules")))

app.use((req,res,next)=>{
    //genel middleware
    //loglama yapılabilir
    next();
});

const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")
const authRouter=require("./routes/auth");
app.use("/admin",adminRouter);
app.use("/user",userRouter);
app.use("/auth",authRouter);


// error handling
app.use((err,req,res,next)=>{
    console.log(err);
    console.log(err.name);
    console.log(err.message);
    res.send("Bir hata oluştu...")
})

app.use("*",(req,res,next)=>{    //isteği yukarıdaki middleware'lerin hiçbiri karşılamıyorsa
    res.send("İstenilen kaynağa ulaşılamıyor.")
})

app.listen(3000,()=>{
    console.log("server running");
})