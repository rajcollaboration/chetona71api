// LOGIN
const router = require("express").Router();
const User = require("../models/User");

router.post('/login',async(req,res)=>{
    try {
        const user =await User.findOne({username: req.body.username});
        if (!user) {
            res.status(400).json('Please Enter Correct Information');
        }
        const validate = null;
        if (req.body.password !== user.password) {
             res.status(400).json("Please Enter Correct Information");
        } else{
            const {password,...others} = user._doc
            res.status(200).json(others);
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;