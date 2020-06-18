//traer el elemento <ul></ul> de highsocre.html
var hSL = document.getElementById("highScoreList");
//traer el elemento <button></button> de highsocre.html
var clearBtn = document.getElementById("clearHighScore");

//obtener el item de localstorage que se llame "highscores" si no existe entonces va a ser igual a un array vacio
var highscores =
JSON.parse(window.localStorage.getItem("highscores")) || [];

//hacer un loop forEach para recorrer el array de highscores
highscores.forEach(function(score){
    //checar que es cada uno de los elementos que nos esta regresando el loop;
    console.log(score)
    //crear un elemento <li> </li> para mostrar cada uno de los scores
    var liElement = document.createElement("li");
    //Asignar contenido a liElement.
    liElement.textContent = score.playerName + " " +  score.score;
    //Agregar el liElement al <ul> </ul> que ya tenemos en highscore.html
    hSL.appendChild(liElement)
})

//Event listener que esta "escuchando" el click del boton clearBtn
clearBtn.addEventListener("click", function(){
    //evitar que se refresque la pagina
    event.preventDefault();
    //limpiar localstorage
    localStorage.clear();
    //forzar el reload de la pagina para actualizar la vista de la pagina
    window.location.reload();
})




