const express = require("express")
const cors = require("cors")
const path = require("path")

app = express()
const PORT  = process.env.PORT || 3000

app.use(cors({origin: '*'}))
app.use(express.json())


app.use(express.static(path.join(__dirname, "public")))


function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

app.get("/roll-dice", (req, res) => {
    let dice = [];
    let total = 0;
    
    for (let i = 0; i < 5; i++) {
        let roll = rollDie();
        dice.push(roll);
        total += roll;
    }

    res.json({dice, total})
})

app.get ("/wake-up", (req, res) => {
    res.json({ message: "Server is awake"})
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

// Custom 404 page.
app.use((request, response) => {
    response.type('text/plain')
    response.status(404)
    response.send('404 - Not Found')
})