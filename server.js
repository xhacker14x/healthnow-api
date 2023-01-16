const express = require('express')
const connection = require('./config/connection')
const usersRoute = require('./routes/usersRoute')

require('dotenv').config()

// express
const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const PORT = process.env.PORT

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})

app.use("/users", usersRoute)