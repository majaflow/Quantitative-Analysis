

function showResponse() {
var name = document.getElementById("name").value
var responsetext =  `Your name is ${name}`
var response = document.getElementById("response")
response.hidden = false
response.innerText = responsetext
}

