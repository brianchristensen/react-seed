import Api from 'api/Api';

let api = new Api();

describe('Api (unit)', () => {
    test('generateOptions should throw an error if url is not supplied', () => {
        console.log(api);
        expect(() => {
            api.generateOptions(null, {})
        }).toThrow();
    });

    test('generateOptions should return an options object if none is supplied', () => {
        let opt = api.generateOptions('http://test.com', null);
        expect(opt).toMatchObject({});
    });
});
