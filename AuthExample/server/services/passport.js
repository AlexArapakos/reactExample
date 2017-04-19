const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const User = require('../models/user');
const config = require('../config');

// Setup options for Local Strategy(for email & password)
const localOptions = { usernameField: 'email' }; // use email as username
// Create Local Strategy
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
	// Verify Username & Password
	User.findOne({ email: email }, function(err, user) {
		if (err) { return done(err); }
		// if not, call done with false
		if (!user) { return done(null, false); }
		// compare password
		user.comparePassword(password, function(err, isMatch) {
			if (err) { return done(err); }
			// if not, call done with false
			if (!isMatch) { return done(null, false); }
			// if yes, call done with user object
			return done(null, user);
		});
	});
});


// Setup options for JWT Strategy(for Token)
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};
// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	// See if userId in this payload exists in our database
	User.findById(payload.sub, function (err, user) {
		if (err) {
			return done(err, false);
		}
		if (user) {
			// If yes, call 'done' with that object
			done(null, user);
		} else {
			// If not, call 'done' without user object
			done(null, false);
		}
	});
});


// Tell passport to use these Strategys
passport.use(jwtLogin);
passport.use(localLogin);