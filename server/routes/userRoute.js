const router = require("express").Router();
const User = require("../models/User");



/// Register user
router.post("/", async (req, res) => {
  const user = await new User(req.body);
  try {
    await user.save();
    console.log("user saved");
  } catch (e) {
    console.log("error while post user", e);
  }

  if (!user) {
    res.status(400).json({ message: "user not created" });
  } else {
    res.status(201).json(user);
  }
});


//login user

router.post("/login-user", async(req,res) => {

  const {username,password} = req.body;

  const user = await User.findOne({username});

  try{
    res.status(200).json(user)
  }
  catch(err){
    console.log(err)
}

})

router.get("/:id", async(req,res)=>{
  const id =   req.params.id
  const user = await User.findById(id);

  try{
     res.status(200).json(user)

    
  }catch(err){
      console.log(err)
  }

});



router.get("/", async(req, res)=>{

  const user = await User.find();

  try{
     
     res.status(200).json(user)

    
  }catch(err){
      console.log(err)
  }
});

module.exports = router;
