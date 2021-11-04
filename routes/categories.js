
const router = require("express").Router();
const User = require("../models/User");
const Category = require("../models/Category");
// CREATE CATEGORYS
router.post('/', async (req, res) => {
try {
            const category = new Category(req.body);
            const savedCategory =await category.save();
            res.status(200).json(savedCategory);
   
} catch (error) {
    res.status(500).json(error);
}

})



// DELETE CATEGORY
router.delete('/:id', async (req, res) => {
    try {
        const CAT = await Category.findById(req.params.id);
                CAT.delete();
                res.status(200).json("CATEGORY deleted");   
    } catch (error) {
        res.status(500).json(error);
    }
})


// GET ALL CATEGORY

router.get('/', async(req,res)=>{
    
    try {
        const categorys = await Category.find();
        res.status(200).json(categorys)
    } catch (error) {
        res.status(500).json(error);
    }
})
module.exports = router;