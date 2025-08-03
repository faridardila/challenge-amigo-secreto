// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresLista =[];

function agregarAmigo(){
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if(nombre === ""){
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
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  nombresLista.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (nombresLista.length == 0) {
    alert("No se ha agregado ningún amigo.");
    return;
  }

  const cantidadAmigos = nombresLista.length;
  const indice = Math.floor(Math.random() * cantidadAmigos);
  const nombreGanador = nombresLista[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "El amigo secreto sorteado es " + nombreGanador;
}
