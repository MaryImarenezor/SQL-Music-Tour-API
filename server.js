// DEPENDENCIES - where we import all of our packages
const { Sequelize } = require('sequelize')
const express = require('express')
const app = express()


// CONFIGURATION / MIDDLEWARE - configure the imported packages and put them to use
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate()
    console.log(`SQL Database connected at ${process.env.PG_URI}! :D`)
} catch (error) {
    console.log(`unable to connect to ${process.env.PG_URI}... :(`)
}

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN - telling our app which port to listen to
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})