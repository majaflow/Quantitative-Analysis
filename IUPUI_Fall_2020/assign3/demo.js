var globalhp = 5
var dragonhp = 10


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