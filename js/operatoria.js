var cuadroDeTextoEntrada = document.querySelector("#Entrada")
var cuadroDeTextoSalida = document.querySelector("#Salida")
var botonEncriptar = document.querySelector("#encriptar");
var botonDesencriptar = document.querySelector("#DesEncriptar")


botonEncriptar.addEventListener("click", function(event){
    var palabra = "";
    var encriptado = "";
    event.preventDefault();
    palabra=cuadroDeTextoEntrada.value.toLowerCase();
    if (/\d/.test(palabra)){alert("No se pueden usar numeros")
    } else {
    for (let i = 0; i < palabra.length; i++){
        if (palabra[i] == "a"){ encriptado = encriptado + "ai"
        } else if (palabra[i] == "e"){ encriptado = encriptado + "enter"
        } else if (palabra[i] == "i"){ encriptado = encriptado + "imes"
        } else if (palabra[i] == "o"){ encriptado = encriptado + "ober"
        } else if (palabra[i] == "u"){ encriptado = encriptado + "ufat"
        } else { encriptado = encriptado + palabra[i]}
    }};
    document.querySelector("#Salida").value = encriptado;
})

botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var palabraEncriptada = "";
    var desencriptada= "";
    palabraEncriptada=cuadroDeTextoEntrada.value.toLowerCase();
    if (palabraEncriptada.includes(palabraEncriptada, "ai")){
        palabraEncriptada = palabraEncriptada.replace(/ai/g, "a")
    };
    if (palabraEncriptada.includes(palabraEncriptada, "enter")){
        palabraEncriptada = palabraEncriptada.replace(/enter/g, "e")
    };
    if (palabraEncriptada.includes(palabraEncriptada, "imes")){
        palabraEncriptada = palabraEncriptada.replace(/imes/g, "i")
    };
    if (palabraEncriptada.includes(palabraEncriptada, "ober")){
        palabraEncriptada = palabraEncriptada.replace(/ober/g, "o")
    };
    if (palabraEncriptada.includes(palabraEncriptada, "ufat")){
        palabraEncriptada = palabraEncriptada.replace(/ufat/g, "u")
    };
    document.querySelector("#Salida").value = palabraEncriptada;
})