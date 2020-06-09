var storage = allStorage();
var clearBtn = document.getElementById("clearHighScore");

clearBtn.onclick = clearHighScores
highScores = Object.keys(localStorage).forEach(function(playerName){
    var highScores = JSON.parse(localStorage.getItem(playerName));
    var li = document.createElement("li")
    li.textContent = playerName + highScores;
    console.log(list)
    list.appendChild(li)



})

console.log(keys)

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}
function clearHighScores () {
 console.log("hola!")

}



