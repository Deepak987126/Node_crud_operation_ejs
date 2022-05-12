import  express  from 'express'
import {join} from 'path'
const app = express()
import web from "./routes/web.js";
const port = process.env.POST ||'3000'
import mongoose from 'mongoose';

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/Chetu_Emp").then(()=>{
  console.log('Connected Successfully..')
}).catch(()=>{
  console.log('connection failed')
})

app.use(express.urlencoded({extended:false}))

// Static files
app.use('/student',express.static(join(process.cwd(),"public")))
app.use('/student/edit',express.static(join(process.cwd(),"public")))

// Set Template engine
app.set("view engine", "ejs");

// Load Routes
app.use("/student", web);



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})