class HttpClient {
    
    get(url, callback) {
        let httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState == httpRequest.DONE && httpRequest.status == 200) {
                callback(httpRequest.responseText);
            }
        }

        httpRequest.open("GET", url, true);
        httpRequest.send(null);
    }

    post(url, params, callback) {
        let httpRequest = new XMLHttpRequest();
        if (callback) {
            httpRequest.onreadystatechange = function() {
                if (httpRequest.readyState == httpRequest.DONE && httpRequest.status == 200) {
                    callback(httpRequest.responseText);
                }
            }
        }

        httpRequest.open("POST", url, true);
        httpRequest.setRequestHeader('Content-type', 'application/json');
        httpRequest.send(JSON.stringify(params));
    }

    postWithoutResponse(url, params, callback) {
        let httpRequest = new XMLHttpRequest();
        if (callback) {
            httpRequest.onreadystatechange = function() {
                if (httpRequest.readyState == httpRequest.DONE && httpRequest.status == 200) {
                    callback();
                }
            }
        }

        httpRequest.open("POST", url, true);
        httpRequest.setRequestHeader('Content-type', 'application/json');
        httpRequest.send(JSON.stringify(params));
    }
}



