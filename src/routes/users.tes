const express = require('express')
const router = express.Router()
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

const verify = (username, password, done) => {
   User.findOne({name: username}, (err, user) => {
      if (err) {return done(err)}
      if (!user) { return done(null, false) }

      if( !user.password === password) {
          return done(null, false)
      }

      return done(null, user)
  })
}

const options = {
  usernameField: "username",
  passwordField: "password",
}

passport.use('local', new LocalStrategy(options, verify))

passport.serializeUser((user, cb) => {
  cb(null, user.id)
})

passport.deserializeUser( (id, cb) => {
  User.findById(id,  (err, user) => {
    if (err) { return cb(err) }
    cb(null, user)
  })
})

router.use(express.urlencoded());
router.use(session({ secret: 'SECRET'}));

router.use(passport.initialize())
router.use(passport.session())

router.get('/login', (req, res) => {
    res.render('users/login')
})

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/api/users/login' }),
  (req, res) => {
    console.log("req.user: ", req.user)
    res.redirect('/')
})

router.get('/signup', (req, res) => {
    res.render('users/signup')
})

router.post('/signup', async (req, res) => {
    const {username, password, displayName, email} = req.body

    const newUser = new User({ username, password, displayName, email })

    try {
        await newUser.save()
        res.redirect('/api/users/login')
    } catch(e) {
        res.status(500).json(e)
    }
})

router.get('/profile',
    (req, res, next) => {
      if (!req.isAuthenticated()) {
        return res.redirect('/api/users/login')
      }
      next()
    },
    (req, res) => {
      res.render('users/profile', { user: req.user })
    }
)

module.exports = router
