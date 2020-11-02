

var note = document.getElementById("note")
var key = "coolStudent123"


function addNote() {
  var importance = document.getElementById("importance")
  var contentDiv = document.getElementById("content")
  var paragraph = document.createElement("p")
  if (typeof Number(importance.value) == "number") {
    paragraph.innerHTML = `Importance Level:${importance.value} Note:${note.value}`
    contentDiv.appendChild(paragraph)
  } else {
    alert("importance (first field) must be a number")
  }
}

function login() {
  var loginToggle = document.getElementById("login")
  var content = document.getElementById("content")
  var username = document.getElementById("username").value
  if (username == key) {
    loginToggle.style.visibility = "hidden"
    content.style.visibility = "visible"

  } else {
    alert("Username is incorrect")
  }
}