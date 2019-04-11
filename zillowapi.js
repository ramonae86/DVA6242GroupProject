function getZillowInfo(req){
    var requestURL = req;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
	var response = request.response;
	console.log(response);
    }
}

function freecodecamp(req){
    const Url=req;
    const Data={
	name:"Said",
	id: 23
    };

    const othePram={
	headers: {
	    "content-type":"application/json; charset=UTF-8"
	},
	body: Data,
	method: "POST"
    };

    fetch(Url, othePram)
	.then(data=>{return data.json()})
	.then(res=>{console.log(res)})
	.catch(error=>console.log(error))
}
