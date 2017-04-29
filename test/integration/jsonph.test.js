import * as jsonplaceholderAPI from 'api/jsonplaceholder';

describe('Jsonplaceholder (integration)', () => {
    test('users endpoint should return list with first user Leanne Graham', async () => {
        let users = await jsonplaceholderAPI.getUsers();
        let user0 = users[0];

        expect(user0.name).toBe('Leanne Graham');
    });
});