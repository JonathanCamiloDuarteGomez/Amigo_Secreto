let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Debe ingresar un nombre");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este amigo ya ha sido agregado");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        li.style.color = "blue";
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agregar amigos para poder sortear");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = `🎉 Amigo sorteado: ${amigoSorteado}`;
}
