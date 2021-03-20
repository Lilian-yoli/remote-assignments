function ajax(src, callback){
// your code here
    const request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if ( request.readyState === 4 && request.status === 200){
            callback(request)
        };
    };
    request.open("GET", src)
    request.send()
}

function render(data){
// your code here.
// document.createElement() and appendChild() methods are preferred.
    const parseData = JSON.parse(data.responseText)
    let html = ""
    for(let i = 0; i < parseData.length; i++){
        html += `<ul>`
        html += `<li>${parseData[i].name}</li>
                <li>${parseData[i].price}</li>
                <li>${parseData[i].description}</li>`
        html +=`</ul>`
    }
    document.createElement("main").innerHTML = html

}
ajax("http://13.113.12.180:4000/api/1.0/remote-w4-data", function(response){ render(response);
}); // you should get product information in JSON format and render data in the page