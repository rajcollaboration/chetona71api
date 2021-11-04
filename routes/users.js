// LOGIN
const router = require("express").Router();
const User = require("../models/User");

router.put('/:id',async(req,res)=>{
if (req.body.userid === req.params.id) {
    try {
        const updateuser = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body,
        });
res.status(200).json(updateuser);
    } catch (error) {
        res.status(500).json(error)
    }
} else {
    res.status(401).json("Something Went Wrong")
}
    
})

// GET USER
router.get('/:id',async (req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if (user !== null ) {
            const {password, ...others} = user._doc;
        res.status(200).json(others)
        }else{
            res.status(401).json('no user found')
        }
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;