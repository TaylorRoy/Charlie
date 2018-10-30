// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const sgMail = require('@sendgrid/mail');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./../../contact2.html"));
});

app.post('/api/contactEmail', function (req, res) {
    
    sgMail.setApiKey("API KEY HERE");
    const msg = {
        to: 'tbroy@hotmail.com.com',
        from: req.body.email,
        subject: 'From Boas Marketing Website',
        text: req.body.message,
        html: '<strong>'+req.body.message+'</strong>',
    };
    sgMail.send(msg);
})

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/api/characters", function (req, res) {
    return res.json(characters);
});


// Create New Characters - takes in JSON inp

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});