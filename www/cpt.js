const exec = require('cordova/exec');

//-------------------------------------------------------------------------------------------------

/* returns OK */
exports.f = function(callback) {
	if (callback) {
		callback('ok');
	};
	return 'ok';
};
