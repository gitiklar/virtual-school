export const serverUrl = 'http://localhost:9000';

async function doFetch(url , method , body = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type':'application/json',
        },
        mode: 'cors',
    };
    body && (options.body = JSON.stringify(body));
    const response = await fetch(url , options);
    if(response.headers.get('Content-Type').startsWith('application/json')) {
        return await response.json();
    }
    return response;
}

export async function postRequest(url , data) {
     return await doFetch(`${serverUrl}${url}` , 'POST' , data);
}

export async function getRequest(url , data) {
    return await doFetch(`${serverUrl}${url}` , 'GET' , data);
}