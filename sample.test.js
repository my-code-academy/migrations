const testObj = require('./sample');

describe('User', () => {
  xit('check if entry is inserted into the table', () => {
    const prom = () => testObj.User.findById(2);
    return expect(prom()).resolves.not.toEqual(null);
  });
  xit('check if entry is not inserted into the table', () => {
    const prom = () => testObj.User.findById(9393993);
    return expect(prom()).resolves.toEqual(null);
  });
  it('dfd', async () => {
    await testObj.User.findOne({
      where: {},
      order: [['createdAt', 'DESC']],
    }).then((entry) => {
      expect([entry.username, entry.birthday]).toEqual(['janedoe', new Date(1980, 6, 20)]);
    });
  });
});
