function search() {
    // console.log(document.getElementById('address').value)
    const url = 'search'
    const client = new HttpClient()
    const params = {
        search_word: document.getElementById('address').value,
    }
    client.post(url, params, function(response) {
        console.log("response : " + response);
        const responseObj = JSON.parse(response)
    })
}