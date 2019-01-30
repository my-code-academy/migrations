const model = require('../../models');

describe('user generate', () => {
  beforeEach(() => {
    model.User.truncate();
  });
  it('should make an entry in the database with the name given', async () => {
    await model.User.generate('qwe', new Date());
    await model.User.generate('asd', new Date());
    expect(await model.User.count()).toEqual(2);
  });
});

describe('user getAllUsers', () => {
  beforeEach(() => {
    model.User.truncate();
  });
  it('should return  entries in the table', async () => {
    await model.User.generate('qwe', new Date());
    const users = await model.User.getAllUsers();
    expect(users.length).toEqual(1);
  });
  it('should return  entry values in the table', async () => {
    await model.User.generate('qwe', new Date());
    const users = await model.User.getAllUsers();
    expect(users[0].dataValues.username).toEqual('qwe');
  });
  it('should return undefined as there are no entries', async () => {
    // await model.User.generate('ajayb')
    const users = await model.User.getAllUsers();
    expect(users[0]).toEqual(undefined);
  });
});
