const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
})

// App is listening on Heroku port or 5000 locally
const PORT = process.env.PORT || 5000
app.listen(PORT)
