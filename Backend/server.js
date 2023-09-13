const express = require('express');
const app = express();
const PORT = 5500;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const usermodel = require('./Models/UserModel');
const bcrypt = require('bcrypt');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());


app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

mongoose.connect("mongodb://0.0.0.0:27017/HealthSiteusers", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected To MongoDBCompass");
}).catch((err) => {
    console.log(`${err} is Occured!!`);
})

app.get('/', (req, res) => {
    res.send('Hello Welcome tot healthWebsite');
})

app.post('/handleusers', async (req, res) => {
    const userName = req.body.Name;
    const UserPassword = req.body.Passsword;
    const userSurName = req.body.SurName;
    const Email = req.body.Email;

    const User = {
        Name: userName,
        Surname: userSurName,
        Passsword: UserPassword,
        Email: Email
    }

    async function hashPassword(plainPassword) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(plainPassword, salt);
            return hash;
        } catch (error) {
            throw error;
        }
    }

    const HashedPassword = await hashPassword(UserPassword)

    const NewUser = new usermodel({
        FirstName: userName,
        Surname: userSurName,
        email: Email,
        password: HashedPassword
    })

    NewUser.save().then(() => {
        console.log("User Added To database")
    }).catch((err) => {
        console.log(`${err} is occured`);
    })

    res.send("User is : " + JSON.stringify(User));

})


app.post("/checkusers", async (req, res) => {
    const UserRegisteredEmail = req.body.UserGivenEmail;
    const UserRegisteredPassword = req.body.UserGivenPassword;

    console.log(UserRegisteredEmail)
    console.log(UserRegisteredPassword)
    const user = await usermodel.findOne({ email: UserRegisteredEmail });
    if (!user) {
        console.log("You are Not Registered");
    }
    else {
        const ComparedPassword = bcrypt.compare(UserRegisteredPassword, user.password)

        if (ComparedPassword) {
            console.log('You are Authenticated Person')
        } else {
            console.log('You are not Authenticated')
        }
    }

     res.send(user.FirstName)

})

app.listen(PORT, () => {
    console.log(`Server Connected Successfully on ${PORT}`);
})