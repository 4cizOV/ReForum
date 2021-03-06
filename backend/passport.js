/**
 * module dependencies for passport configuration
 */
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const LocalStrategy = require('passport-local').Strategy;

const GITHUB_CLIENT_ID = require('../config/credentials').GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = require('../config/credentials').GITHUB_CLIENT_SECRET;
const GITHUB_CALLBACK_URL = require('../config/credentials').GITHUB_CALLBACK_URL;

// controllers
const getUser = require('./entities/user/controller').getUser;
const signInViaGithub = require('./entities/user/controller').signInViaGithub;
const login = require('./entities/user/controller').login;

/**
 * passport configuration
 */
const passportConfig = (app) => {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    getUser(id).then(
      (user) => { done(null, user); },
      (error) => { done(error); }
    );
  });

  // github strategy for passport using OAuth
  passport.use(new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: GITHUB_CALLBACK_URL,
      scope: 'user:email',
    },
    (accessToken, refreshToken, gitProfile, done) => {
      signInViaGithub(gitProfile).then(
        (user) => { console.log('got the user'); done(null, user); },
        (error) => { console.log('something error occurs'); done(error); }
      );
    }
  ));

  // local strategy for login using username and password
  passport.use(new LocalStrategy(
    (username, password, done) => {
      login(username, password).then(
        (user) => { 
          console.log('got the user'); 
          done(null, user); 
        },
        (error) => {
          if(typeof error == "string"){
            return done(null, false, { message: error });
          }else{
            return done(err);
          }
        }
      );
    }
  ))

};

module.exports = passportConfig;
