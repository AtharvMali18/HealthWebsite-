const express = require('express');
const app = express();
const PORT = 5500;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const usermodel=require('./Models/UserModel');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());


app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

mongoose.connect("mongodb://0.0.0.0:27017", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
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
    const UserFullName=userName+userSurName;

    const User = {
        Name: userName,
        Surname: userSurName,
        Passsword: UserPassword,
        Email: Email
    }

    res.send("User is : " + JSON.stringify(User));

})

app.listen(PORT, () => {
    console.log(`Server Connected Successfully on ${PORT}`);
})