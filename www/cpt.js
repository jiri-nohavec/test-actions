const exec = require('cordova/exec');

//-------------------------------------------------------------------------------------------------

exports.f = function(callback) {
	if (callback) {
		callback('ok');
	};
	return 'ok';
};
