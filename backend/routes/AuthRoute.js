const {Signup,Login,Logout}=require('../controllers/AuthController');
const { userVerification } = require('../middleWares/AuthMiddleware');
const router=require("express").Router();

router.post("/signup",Signup);
router.post("/login",Login);
router.post("/",userVerification);
router.get("/logout", Logout);

module.exports=router;