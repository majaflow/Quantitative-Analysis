var content = document.getElementById("content")
var header = document.getElementById("header")
var Counter = 0

function goHome() {
  header.innerHTML = "Home"
  content.innerHTML = "This is the Home page"
}

function goAbout() {
  header.innerHTML = "About"
  content.innerHTML = "Matthew Flowers"
}

function goInteract() {
  header.innerHTML = "Interact"
  content.innerHTML = "This is the Interact page"

  var btn = document.createElement("button")
  var counter = document.createElement("p")

  btn.innerHTML = "Tap to add to Counter"
  btn.addEventListener('click', function(){
    Counter = Counter + 1
    counter.innerHTML = `${Counter}`
  })

  btn.setAttribute("id", "btn")
  counter.setAttribute("id", "counter")

  document.body.appendChild(counter)
  document.body.appendChild(btn)
}

