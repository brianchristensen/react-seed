import Api from 'api/Api';

let api = new Api();

export async function getUsers() {
    return await api.get('https://jsonplaceholder.typicode.com/users');
}
