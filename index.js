const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const controllers = require('./controllers');

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
	console.log(`${Date.now()}: INCOMING REQUEST >>> ${req.url}`);
	next();
});

app.get('/api/', controllers.get);

app.use((req, res) => {
	const pathToFile = path.resolve(__dirname, './build/', `./${req.url}`);
	const stream = fs.createReadStream(pathToFile);
	stream.pipe(res);
});

app.use((err, req, res) => {
	console.log(`${Date.now()} ERRORED`);
	res.sendStatus(500);
});

app.listen(PORT, () => {
	console.log('listening ot port ' + PORT);
});