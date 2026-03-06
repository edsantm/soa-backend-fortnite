const express = require("express")
const axios = require("axios")
require("dotenv").config()

const router = express.Router()

router.get("/skins", async (req, res) => {

    try {

        const response = await axios.get(`${process.env.FORTNITE_API}/cosmetics/br`)

        // FILTRAR SOLO SKINS
        const skins = response.data.data.filter(
            (item) => item.type.value === "outfit"
        )

        res.json({ data: skins })

    } catch (error) {

        res.status(500).json({
            message: "Error al consumir la API de Fortnite"
        })

    }

})
module.exports = router