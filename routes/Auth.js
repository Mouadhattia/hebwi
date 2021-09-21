const express = require("express");
const router = express.Router();
const {loginRules,regiterRules,validation} = require('../middleware/Authvalidator');
const isAuth =require("../middleware/passsport")
const authCtrl = require('../controllers/authCtrl');

//register
router.post("/register",regiterRules(),validation, authCtrl.register)
//login
router.post("/login",loginRules(),validation, authCtrl.login);
//passport
router.get("/current",isAuth(),authCtrl.current);


module.exports = router;