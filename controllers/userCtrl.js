const User = require("../models/User");

 


 const userCtrl= {
     get: async (req, res) => {
        try {
            const result = await User.find()
            res.send({ response: result, message: "getting contacts " });
        } catch (error) {
            res.status(400).send({ message: "can not get contacts" });
        }
    },
    getOne: async (req, res) => {
        try {
            const result = await User.findOne({ _id: req.params.id });
            if(!result){
                return res.status(400).send({ message: "there is no contact with this id" });}
            res.send({ response: result, message: "getting contact " });
            
        } catch (error) {
            res.status(400).send({ message: "there is no contact with this id" });
        }
    },
    delete : async (req, res) => {
        try {
            const result = await User.deleteOne({ _id: req.params.id });
            result.deletedCount ==1 ? res.send({ response: "contact deleted" }) :
            res.send({message:"there is no contact with this id "});
            
    
        } catch (error) {
            res.status(400).send({ message: "there is no contact with this id"});
        }

    },
    post : async (req, res) => {
        try {
            // create a new contact with the model contact
            const newContact = new Contact(req.body);
        // test if the user has an email
            if (!req.body.email) {
              res.status(400).send({ message: "email is required check again" });
              return;
            }
            // test 2: if the email ele=ready exist => email should be unique 
            const user = await User.findOne({ email: req.body.email });
            if (user) {
              res.status(400).send({ message: "user already exist email should be unique" });
              return;
            }
            // save the contact
            const response = await newContact.save();
            res.send({ response: response, message: "user is saved" });
          } catch (error) {
            console.log(error);
            res.status(500).send({ message: "can not save it" });
          }
        },
        put: async (req, res) => {
            try {
                const result = await User.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
                result.modifiedCount=1 ? res.send({ message: "user updated" }) :
                res.send({ message: "there is no contact with this id "});
                res.send({ response: result, message: "getting contact " });
            } catch (error) {
                console.log(error)
            }
        }
    
 }

 module.exports = userCtrl;