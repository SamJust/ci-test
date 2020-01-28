const {get} = require('./controllers');

describe('this is a test', () => {
	it('should pass', async () => {
		const resMock = {
			send: jest.fn()
		};

		await get({}, resMock);
		expect(resMock.send).toHaveBeenCalledWith('HUMANS MUST DIE!');
	});
});