// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


function agregarAmigo(){
    let vacio = document.getElementById("amigo").value == "" ? true :  false;
    vacio ? alert("Debe ingresar un nombre") : amigos.push(document.getElementById("amigo").value);
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        li.style.color = "blue";
        lista.appendChild(li);
    });

    document.getElementById("amigo").value = "";
}
function sortearAmigo(){
    amigos.length!=0 ? sortear() : alert("Debe agregar amigos, para poder sortear");
}
function sortear(){
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("listaAmigos").textContent = " ";
    document.getElementById("resultado").textContent = amigoSorteado;
}
    
