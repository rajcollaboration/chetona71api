const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require("multer");
const app = express();
const path = require('path')
app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(cors());
dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("db connected")).catch(err => console.log(err));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    }, filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
});
const upload = multer({storage:storage});
app.post('/api/fileupload',upload.single('file'),(req,res)=>{
    res.status(200).json("Uploaded Successfully")
})
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/post", postRoute);
app.use("/api/categories", categoryRoute);
app.listen(8000, () => {
    console.log("app is running....");
})