function enviarEMostrarTabela() {
    // Obter os dados do formulário de contato
    let nomeUsuario = document.querySelector('input[name="nome"]').value;
    let emailUsuario = document.querySelector('input[name="email"]').value;
    let mensagemUsuario = document.querySelector('textarea[name="mensagem"]').value;

    // Criar um objeto com os dados do contato
    let dadosContato = { nome: nomeUsuario, email: emailUsuario, mensagem: mensagemUsuario };

    // Chamar a função para inserir a mensagem
    inserirMensagem(dadosContato);

    // Redirecionar para a página de exibição de tabelas
    window.location.href = "ver_tabela.html";
}

function exibirMensagens() {
    let mensagens = obterMensagens();
    let tabelaPai = document.getElementById("table-mensagens");

    mensagens.forEach(element => {
        let nome = element["nome"];
        let email = element["email"];
        let mensagem = element["mensagem"];

        let tableRow = document.createElement("tr");

        let tableData1 = document.createElement("td");
        tableData1.textContent = nome;
        tableRow.appendChild(tableData1);

        let tableData2 = document.createElement("td");
        tableData2.textContent = email;
        tableRow.appendChild(tableData2);

        let tableData3 = document.createElement("td");
        tableData3.textContent = mensagem;
        tableRow.appendChild(tableData3);

        tabelaPai.appendChild(tableRow);
    });
}

// Chamar a função de exibição assim que a página carregar
window.onload = exibirMensagens;