var express = require('express');
var locale = require('locale');
var useragent = require('useragent');
var router = express.Router();

router.get('/whoami', (req, res) => {
	const ipaddress = req.ip;
	const language = new locale.Locales(req.headers['accept-language'])[0];
	const os = useragent.parse(req.headers['user-agent']).os.toString();

	const headerDetails = {
		ipaddress,
		language,
		os
	};
	
	res.json(headerDetails);
});

module.exports = router;