require("dotenv").config();
require("./config/database").connect();
const { sendSms } = require('./helper/sms_helper');
const { sendEmail } =require('./helper/email_helper');
const {randomNu6 , randomNu5 , randomNu4} = require('./helper/random_helper');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
const express = require("express");


const User = require("./model/user");

const app = express();

app.use(express.json());

// USER REG, LOG
// REG
app.post("/api/v1/register", async(req, res) => {
    try {
        const id = randomNu6.apply();
        const{ first_name, middle_name, last_name, email, phone, password} = req.body;
        if (!(first_name && middle_name && last_name && email && phone && password)) {
            res.status(400).send("All input is required");
        }
        const balance = 0;
        const order_id = randomNu4.apply();
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        encryptedPassword = await bcrypt.hash(password, 10);
        //(password, 10);

        const user = await User.create({
            id,
            first_name,
            middle_name,
            last_name,
            email: email.toLowerCase(),
            balance,
            phone,
            order_id,
            password: encryptedPassword,
        });
        const token = jwt.sign(
            { user_id: id, email },
            process.env.JWT_KEY,
            {
              expiresIn: "2h",
            }
          );
          user.token = token;
          sendEmail(user.email,"Activation code",`Your activation code is : ${randomNu5.apply()}`)
          // send sms on SSL {TODO HERE}
          res.status(201).json(user);
    }catch (err) {
        console.log(err);
      }
}); 

app.post("/api/v1/login", async (req, res) => {

    
    try {
      const { email, password } = req.body;
  
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      const user = await User.findOne({ email });
      const passworda = bcrypt.compare(password, user.password)
      if (user && passworda) {
        // Create token
        const token = jwt.sign(
          { user_id: user.id, email },
          process.env.JWT_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        user.token = token;
        //email with ip and new login {TODO HERE}
        res.status(200).json({ token: token });
      }
      else {
      res.status(400).send("Invalid Credentials");
      }
    } catch (err) {
      console.log(err);
    }

  });

  //AUTH 
  app.post("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });

module.exports = app;