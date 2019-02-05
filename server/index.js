const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const app = express()

passport.use(new GoogleStrategy())

// App is listening on Heroku port or 5000 locally
const PORT = process.env.PORT || 5000
app.listen(PORT)
