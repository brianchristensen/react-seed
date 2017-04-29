export default class Api {
    constructor() { }

    generateOptions(url, options) {
        // check url was provided
        if (!url) {
            throw 'Calls to API must provide a valid URL!';
        }

        let opt = null;

        // make sure options is an object
        if (options === null || typeof options !== 'object' || options) {
            opt = {};
        } else {
            opt = options;
        }

        // default headers if not present
        if (!opt.headers) {
            Object.assign(opt, {
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            });
        }

        return opt;
    }

    async get(url, options) {
        let opt = this.generateOptions(url, options);

        Object.assign(opt, {
            method: 'GET', 
            mode: 'cors', 
            redirect: 'follow',
        });

        return await this._request(url, opt);
    }

    async post(url, options) {
        let opt = this.generateOptions(url, options);

        Object.assign(opt, {
            method: 'POST', 
            mode: 'cors', 
            redirect: 'follow',
        });

        return await this._request(url, opt);
    }

    async _request(url, options) {
        let req = new Request(url, options);

        try {
            let res = await fetch(req);
            let data = await res.json();

            return data;
        } catch(e) {
            console.log("API Request failed", e.stack);
        }        
    }
}