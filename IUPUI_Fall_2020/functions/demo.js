var globalhp = 5
var dragonhp = 10
var dragonDamage = 0
var body = document. getElementsByTagName("body")[0];
var element = document.getElementById("new");

// Create a function that has damage and attack type as parameters.
// The damage value is dealt to the dragon.
// If the attack type is fire, it deals 1 less damage.
// If the attack type is ice, it deals 1 additional damage.
// Make sure the damage of the dragon is visible for the user
// Attach this function to 3 separate buttons.
// One button is fire and 3 damage.
// One button is ice and is 1 damage
// One button is poison and does 4 damage.
// When the Dragon's damage is 10 or more, the user wins and should be notified.
function loaded() {
  var fireBtn = document.createElement("button")
  var iceBtn = document.createElement("button")
  var poisionBtn = document.createElement("button")
  fireBtn.innerHTML = "Fire Magic!"
  fireBtn.addEventListener('click', function(){
    dealDamage("fire", 3)});
  iceBtn.innerHTML = "Ice Magic!"
  iceBtn.addEventListener('click', function(){
    dealDamage("ice", 1)});
  poisionBtn.innerHTML = "Posion Magic!"
  poisionBtn.addEventListener('click', function(){
    dealDamage("poision", 4)});
  this.body.appendChild(fireBtn)
  this.body.appendChild(iceBtn)
  this.body.appendChild(poisionBtn)
};

function attack() {
  var withStr = document.getElementById("attack").value
  var oneOrTwo = getRandomInt(1,3)
  if (globalhp > 0) {
        var randomNumber = getRandomInt(1,6)
        if (withStr < 6) {
          if (randomNumber > withStr) {
            randomNumber = withStr
          }
          dragonhp = dragonhp - randomNumber
        } else {
          dragonhp = dragonhp - 1
        }

        if (dragonhp > 0) {
        document.getElementById("drgnhp").innerHTML = `HP: ${dragonhp}`
        } else {
          document.getElementById("drgnhp").innerHTML = `HP: 0`
          document.getElementById("drgnlbl").innerHTML = "You have slain the dragon!"
        }
        globalhp = globalhp - oneOrTwo
        if (globalhp <= 0) {
          var tag = document.createElement("p");
          var text = document.createTextNode("The Dragon has killed you");
          tag.appendChild(text);
          var element = document.getElementById("new");
          element.appendChild(tag);
        }
        var hp = document.getElementById("hp")
        hp.innerHTML = `HP: ${globalhp}`
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function dealDamage(type, damage) {
  console.log(`${type}`)
  if (type == "fire") {
    dragonDamage = dragonDamage + damage - 1
  } else if (type == "ice") {
    dragonDamage = dragonDamage + damage + 1
  } else {
    dragonDamage = dragonDamage + damage
  }
  console.log(`${damage}`)
  document.getElementById("dragonDamage").innerHTML = `Damage: ${dragonDamage}`
  if (dragonDamage > 9) {
    document.getElementById("dragonDamage").innerHTML = `YOU HAVE SLAIN THE DRAGON WITH MAGIC!!!!`
  }
}