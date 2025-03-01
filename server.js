const express = require("express")
const cors = require("cors")

const app = express()
const PORT  = process.env.PORT || 3000

app.use(cors)

function rollDice() {
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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})