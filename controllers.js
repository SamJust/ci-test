const {
	sum
} = require('./domain/CalculatorService');

module.exports = {
	get: (req, res) => {
		const result = sum(req.query.a, req.query.b);

		res.send(result);
	}
};