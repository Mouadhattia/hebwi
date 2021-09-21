const express = require("express");
const router = express.Router();
const userCtrl= require("../controllers/userCtrl");





router.get("/user",userCtrl.get);
router.post("/user",userCtrl.post);
router.get("/user/:id",userCtrl.getOne);
router.delete("/user/:id",userCtrl.delete);
router.put("/user/:id",userCtrl.put);



module.exports = router;




