// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresLista =[];

function agregarAmigo(){
  let input = document.getElementById("amigo");
  let nombre = input.value;

  if(nombre == ""){
    alert("Por favor, inserte un nombre.");
    return;
  }

  if (nombresLista.includes(nombre)) {
    alert("El nombre ya había sido agregado anteriormente.");
    return;
  }

  nombresLista.push(nombre);
  console.log(nombresLista);
  input.value = "";
  actualizarLista();
}

function actualizarLista(){
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  nombresLista.forEach(function(nombre) {
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (nombresLista.length == 0) {
    alert("No se ha agregado ningún amigo.");
    return;
  }

  let cantidadAmigos = nombresLista.length;
  let indice = Math.floor(Math.random() * cantidadAmigos);
  let nombreGanador = nombresLista[indice];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "El ganador es: " + nombreGanador;
}
