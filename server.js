const express = require("express")
const cors = require("cors")

const app = express()
const PORT  = process.env.PORT || 3000


app.use(cors())

app.use(express.json())

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

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    next();
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})