const express = require('express')
require('./services/passport')
const app = express()

require('./routes/authRoutes')(app)

// App is listening on Heroku port or 5000 locally
const PORT = process.env.PORT || 5000
app.listen(PORT)
