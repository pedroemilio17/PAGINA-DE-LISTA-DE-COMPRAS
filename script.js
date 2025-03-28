function adicionarItem(){
    let mensagem = "Item adicionado à lista";

    let item = document.getElementById("item");
    let itemvalor = item.value;
    document.getElementById("mensagem").textContent = mensagem ;

    let listaCompras = document.getElementById("listaCompras");
    let novoItem = document.createElement("li");

    novoItem.textContent = itemvalor;

    listaCompras.appendChild(novoItem);

    item.value(" ");

}