const passport = require('passport')

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )

  app.get('/auth/google/callback', passport.authenticate('google'))

  app.get('/auth/twitter', passport.authenticate('twitter'))

  app.get('/auth/twitter/callback', passport.authenticate('twitter'))

  app.get('/api/current_user', (req, res, next) => {
    res.send(req.user)
  })
}
