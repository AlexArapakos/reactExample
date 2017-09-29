const passport = require('passport');

const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');

// use jwt strategy for authentication & if is authenticated, don't create a cookie session
const requireAuth = passport.authenticate('jwt', { session: false });
// use local strategy for authentication & if is authenticated, don't create a cookie session
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
	app.get('/', requireAuth, function(req, res) {
		res.send({ message: 'Super secret code is ABC123' });
	});
	app.post('/signin', requireSignin, Authentication.signin);
	app.post('/signup', Authentication.signup);
}
