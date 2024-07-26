require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db/db')
const User = db.user;

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) =>
{
    res.send("Hello");
})

app.post('/signup', async (req, res) => {
    const { name, email, pass } = req.body;

    if (name && email && pass) {
                    // Create a new user in the database
                    console.log("inside save")
        const user = new User({ name, email, password: pass });
        //await user.save();
        const savedUser = await user.save();
        res.json({ success: true, message: 'User signed up successfully' });
        console.log(savedUser)
    } else {
        console.log("invalid")
        res.json({ success: false, message: 'Invalid input' });
    }
});

app.listen(process.env.PORT, () => console.log("app started"));