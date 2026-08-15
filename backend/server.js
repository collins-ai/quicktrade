import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import registerRoute from "./routes/register.js"
import connectDB from "./config/connectDB.js"
import dns from "node:dns/promises"
dns.setServers(["8.8.8.8", "1.1.1.1"])

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

connectDB()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(`/register`, registerRoute)

mongoose.connection.once(`open`, () => {
    console.log(`application connected to mongoDB`)
    app.listen(PORT, (error) => {
        error ? console.log(error.message) : console.log(`server listening on port ${PORT}`)
    })
})