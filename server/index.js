const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

const app = express()

require('./routes/authRoutes')(app)

// App is listening on Heroku port or 5000 locally
const PORT = process.env.PORT || 5000
app.listen(PORT)
