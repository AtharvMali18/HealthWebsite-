const express = require('express');
const app = express();
const PORT = 5500;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const usermodel = require('./Models/UserModel');
const FileModel = require('./Models/FileModel');
const DetailsModel = require('./Models/Details');
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

    const user = await usermodel.findOne({ email: UserRegisteredEmail });
    if (!user) {
        res.send("No User Registered");
    }
    else {
        const ComparedPassword = await bcrypt.compare(UserRegisteredPassword, user.password)
        console.log(ComparedPassword)

        if (ComparedPassword == true && user) {
            res.send(user.FirstName);
        } else {
            res.send("No User Registered")
        }
    }
})

app.post('/HandleFileUploaded', async (req, res) => {
    const UserName = req.body.WhoSaved;
    const fileName = req.body.FileName;
    const FileUrl = req.body.FileURL;

   console.log(fileName, FileUrl)

    const NewFile = new FileModel(({
        Firstname: UserName,
        fileName: fileName,
        fileURL: FileUrl,
    }))

    NewFile.save().then(() => {
        console.log("File Added Successfully")
        res.send(NewFile);
    })

})

app.post('/getAllCertificates', async (req, res) => {
    const UserNameCertificates = req.body.userName;

    const Certificates = await FileModel.find({ Firstname: UserNameCertificates })
    res.send(Certificates);

})


app.post('/setprofile', async (req, res) => {
    const FirstNameofuser = req.body.PatientDetailsU.Name;
    const PatientDetails = req.body.PatientDetailsU;

    const profile = new DetailsModel(({
        Firstname: FirstNameofuser,
        patientDetails: PatientDetails
    }))

    profile.save().then(() => {
        res.send(`Profile Done For : ${FirstNameofuser} `);
    })

})

app.post('/getProfile', async (req, res) => {

    const FirstNameofuser = req.body.Name;

    const user = await DetailsModel.findOne({ Firstname: FirstNameofuser });

    if (user) {
        res.send(user.patientDetails);
    } else {
        res.send("Fill Profile");
    }

})



app.listen(PORT, () => {
    console.log(`Server Connected Successfully on ${PORT}`);
})