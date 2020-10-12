// List every item to the page, including its Name
// Each item should be on a different line
// If the age of the item from the array is above 40, style the text of that line should be red
// Below my list, there should be a counter that starts at 0.
// When I click on a button on my webpage, it should increase that value by 1 visually (No prompts allowed here)
// Make sure to be creating a program that is reusable, and not hard coding the correct output.
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];


function loaded () {
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var tag = document.createElement("div")
    tag.innerHTML = `Name: ${item.name} Age: ${item.age}`
    if(item.age > 40) {
      tag.style.color = "#ff0000"
    }
    document.body.appendChild(tag)
  }
}
