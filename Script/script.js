function inicio() {
    var x = document.getElementById("infoPer");
    var y = document.getElementById("objetivo");
    var z = document.getElementById("edu");
    var z2 = document.getElementById("experi");
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    z2.style.display = "none";
    
    const fechaActual= new Date();
    const anoActual= parseInt(fechaActual.getFullYear());
    const mesActual= parseInt(fechaActual.getMonth())+1;
    const diaActual= parseInt(fechaActual.getDate());
    const anoNac = 1992;
    const mesNac = 03;
    const diaNac = 08;
    let edad = anoActual-anoNac;
    if(mesActual<mesNac){
        edad--;
    }else if(mesActual===mesNac){
        if (diaActual<diaNac){
            edad--;
        }
    }
    document.getElementById('edad').innerHTML = edad;
}

function infoPer() {
    var x = document.getElementById("infoPer");
    var y = document.getElementById("objetivo");
    var z = document.getElementById("edu");
    var z2 = document.getElementById("experi");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        z2.style.display = "none";
    }
}

function objetivo() {
    var x = document.getElementById("infoPer");
    var y = document.getElementById("objetivo");
    var z = document.getElementById("edu");
    var z2 = document.getElementById("experi");
    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
        z2.style.display = "none";
    }
}

function edu() {
    var x = document.getElementById("infoPer");
    var y = document.getElementById("objetivo");
    var z = document.getElementById("edu");
    var z2 = document.getElementById("experi");
    if (z.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
        z2.style.display = "none";
    }
}

function experi() {
    var x = document.getElementById("infoPer");
    var y = document.getElementById("objetivo");
    var z = document.getElementById("edu");
    var z2 = document.getElementById("experi");
    if (z2.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        z2.style.display = "block";
    }
}

document.getElementById('enviar').onclick = function () {
    alert("Se ha enviado el comentario")
}



window.onload=inicio;