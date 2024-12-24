const telefoneInput = document.getElementById('telefone');

const mask = IMask(telefoneInput, {
    mask: '(00) 00000-0000'
});
mask.updateValue();

let idContador = 1;

function cadastraContato() {
    //definição das variáveis
    let contato = document.getElementById('contato').value.trim();
    let telefone = document.getElementById('telefone').value.trim();
    const tabelaBody = document.querySelector("tbody");
    const novaLinha = document.createElement("tr");

    //Define como os campos serão preenchidos
    novaLinha.innerHTML = `
    <td>${idContador++}</td>
    <td>${contato}</td>
    <td>${telefone}</td>`;

    //insere os dados na tabela
    tabelaBody.appendChild(novaLinha);

    //Limpa os campos antes do modal ser fechado
    document.getElementById('contato').value = "";
    document.getElementById('telefone').value = "";

    //Fecha o modal
    const modal = bootstrap.Modal.getInstance(document.getElementById("cadastro-contato"));
    modal.hide();

}
