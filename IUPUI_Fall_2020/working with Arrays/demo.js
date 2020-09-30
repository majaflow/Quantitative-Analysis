var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]


for (var i = 0; i < warriors.length; i++) {
  var warrior = warriors[i]
  if (warrior.health >= 10 && warrior.damage >= 2 && warrior.warrior == true) {
    var character = document.createElement("div")
    var element = document.getElementById("new");
    character.innerHTML = warrior.name
    if(warrior.name.includes("a")) {
      character.style.color = "#ff0000"
    }
    element.appendChild(character)
  }
}