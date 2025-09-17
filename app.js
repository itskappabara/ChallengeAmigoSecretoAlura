const listaAmigos = [];
const inputAmigos = document.getElementById ("amigo");
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById ("resultado");

function agregarAmigo() {
    listaAmigos.push(inputAmigos.value)
    ulListaAmigos.innerHTML += `<li>${inputAmigos.value}</li>`;
    inputAmigos.value = '';
}

function sortearAmigo() {
    if (listaAmigos.length > 0) {
        const random = Math.floor((Math.random() * listaAmigos.length));
        const amigoSecreto = listaAmigos[random]
        ulResultado.innerHTML = `<li>El amigo secreto es ${amigoSecreto}.</li>` 
    } else {
        ulResultado.innerHTML = "<li>No hay amigos en la lista.</li>"
    }
}