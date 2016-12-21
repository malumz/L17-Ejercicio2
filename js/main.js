var weekday = document.getElementById("weekday");
var vacations = document.getElementById("vacations");
var pSalida = document.getElementById("salida");



function calcular() {
    var valweekday = weekday.value;
    var valvacations = vacations.value;

    if (valweekday == "" || valvacations == "") {
        weekday.placeholder="Rellenar el campo!";
        weekday.style.backgroundColor = "rgba(247, 118, 23, 0.2)";
        vacations.placeholder="Rellenar el campo!";
        vacations.style.backgroundColor = "rgba(247, 118, 23, 0.2)";
    } else {
        vacations.style.backgroundColor = "#fff";
        weekday.style.backgroundColor = "#fff";

      if (valweekday == "si" && valvacations == "no") {
            pSalida.innerHTML = "no puedes dormir! sorry :(";
        } 
        
        else if (valweekday == "si" && valvacations == "si") {
            pSalida.innerHTML = "Puedes dormir!  :)";
        }
        
        else if (valweekday == "no" && valvacations == "si") {
            pSalida.innerHTML = "Puedes dormir! :) ";
        }
        
        else if (valweekday == "no" && valvacations == "no") {
            pSalida.innerHTML = "Puedes dormir! :)";
        }
        
        else {
            pSalida.innerHTML = "Escribe 'si' o 'no'";
        }
    }
}