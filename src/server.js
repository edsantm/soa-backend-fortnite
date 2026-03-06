const express = require("express")
const cors = require("cors")
require("dotenv").config()

const fortniteRoutes = require("./routes/fortniteRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/fortnite", fortniteRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})