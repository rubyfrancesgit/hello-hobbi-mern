const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const cors = require("cors");
const User = require("./models/User");
// const UserModel = require("./models/User");
const HobbiSession = require("./models/HobbiSession");
const config = require("./config.json");

app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.${config.MONGO_CLUSTER_NAME}.mongodb.net/${config.MONGO_DBNAME}?retryWrites=true&w=majority`);

app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});

// get users
app.get("/getUsers", (req, res) => {
    User.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    });
});

// get hobbies
app.get("/allHobbies", (req, res) => {
    HobbiSession.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    });
});
// app.get("/allHobbies", (req, res) => {
//     HobbiSession.find().then(result => {
//         res.send(result);
//     });
// });

// check if user email is taken
app.post("/checkUserEmail", (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, userExists) => {
        if(userExists) {
            res.send("Email already taken");
        } else {
            res.send("Email available");
        }
    });
});

// register user
app.post("/createUser", (req, res) => {
    console.log(req.files);
    User.findOne({
        email: req.body.email
    }, (err, userExists) => {
        if(userExists) {
            res.send("Email already taken. Please try logging in");
        } else {
            const hash = bcrypt.hashSync(req.body.password);
            const user = new User({
                _id: new mongoose.Types.ObjectId,
                name: req.body.name,
                email: req.body.email,
                password: hash,
                age: req.body.age,
                bio: req.body.bio,
                profilePictureLink: req.body.profilePictureLink
            });
            user.save()
                .then(result => {
                    console.log(user, result);
                    res.send(result);
                }).catch(err => {
                    res.send(err);
                });
        }
    });
});

// Login user
app.post('/loginUser', (req, res) => {
    User.findOne({email: req.body.email}, (err, userResult) => {
        if(userResult) {
            if(bcrypt.compareSync(req.body.password, userResult.password)) {
                res.send(userResult);
            } else {
                res.send("Wrong password");
            }
        } else {
            res.send("User not found. Please register");
        }
    });
});

app.post('/createSession', (req, res) => {
    const hobbiSession = new HobbiSession({
        _id: new mongoose.Types.ObjectId,
        sessionName: req.body.sessionName,
        city: req.body.city,
        lessonPlan: req.body.lessonPlan,
        whatsIncluded: req.body.whatsIncluded,
        hostHouse: req.body.hostHouse,
        learnerHouse: req.body.learnerHouse,
        publicSetting: req.body.publicSetting,
        extraGuest: req.body.extraGuest,
        sessionPrice: req.body.sessionPrice,
        extraGuestPrice: req.body.extraGuestPrice,
        sessionImageLink: req.body.sessionImageLink,
        hostId: req.body.hostId,
    });

    hobbiSession.save()
    .then(result => {
        console.log(hobbiSession, result);
        res.send(result);
    }).catch(err => {
        res.send(err);
    });
});