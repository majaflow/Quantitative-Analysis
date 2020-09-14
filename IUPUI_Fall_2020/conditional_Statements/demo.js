


function showResponse() {
var input1 = document.getElementById("input1").value
var input2 = document.getElementById("input2").value
var operator = document.getElementById("operator").value
var total = eval(`${input1}`+`${operator}`+`${input2}`)
var responsetext =  `Output: ${input1} ${operator} ${input2} = ${total}`
var response = document.createElement('label')
response.innerText = responsetext
document.appendChild(response)
}

