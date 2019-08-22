import axios from 'axios';


const singleton = Symbol();
const singleton_enforcer = Symbol();

class Http {

    constructor(enforcer){
        if (enforcer !== singleton_enforcer) {
            throw new Error('Cannot construct singleton. If you tried to using new <Class>() better do not use that');
        }

        this.session = axios.create({
            baseURL: `${PROTOCOL}://${HOST}/${BASE_URL}`,
            headers: {
                // Our Request headers
                // 'Access-Control-Allow-Origin':'*'
            },
        });

        this.session.interceptors.request.use({

        }, (request)=>{

        })
        this.session.interceptors.response.use((response)=>{
            let obj = Object.assign({}, response);
            if (window.chrome) console.groupCollapsed('%c' + `API Success:${decodeURI(obj.config.url)}`, 'background:#3CB043; color:#fff')
                else console.groupCollapsed("Error calling API")
            if (response) 
                console.log('Response: %o', obj)
            console.groupEnd()
            return Promise.resolve(response)
        }, (response)=>{
            let obj = Object.assign({}, response);
            if (window.chrome) console.groupCollapsed('%c' + `Error Calling API:${obj.config.url}`, 'background:#FE4D4D; color:#fff')
                else console.groupCollapsed("Error calling API")
            if (response) 
                console.log('Response: %o', obj)
            console.groupEnd()
            return null;
        })
    }

    static get instance() {
        // Try to get an efficient singleton
        if (!this[singleton]) {
            this[singleton] = new Http(singleton_enforcer);
        }

        return this[singleton];
    }

    get(...params){
        return this.session.get(...params)
        .catch((resp)=>{return Promise.reject(resp)})
    };
    post(...params){
        return this.session.post(...params)
    };
    put(...params){
        return this.session.put(...params)
    };
    patch(...params){
        return this.session.patch(...params)
    };
    remove(...params){
        return this.session.remove(...params)
    };
}

export default Http;