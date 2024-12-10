async function enviarFormulario() {

    const livroDTO = {
        "titulo": document.querySelectorAll("input")[0].value,
        "autor": document.querySelectorAll("input")[1].value,
        "editora": document.querySelectorAll("input")[2].value,
        "anoPublicacao": document.querySelectorAll("input")[3].value,
        "isbn": document.querySelectorAll("input")[4].value,
        "quantTotal": Number(document.querySelectorAll("input")[5].value),
        "quantDisponivel": Number(document.querySelectorAll("input")[6].value),
        "valorAquisicao": Number(document.querySelectorAll("input")[7].value),
        "statusLivroEmprestado": document.querySelectorAll("input")[8].value,
    }
    try {
        const respostaServidor = await fetch("http://localhost:3333/lista/livros", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livroDTO)
        });

        if (!respostaServidor.ok) {
            throw new Error("Erro ao enviar os dados para o servidor. Contrate o administrador do sistema");
        }
        alert("Livro cadastrado com sucesso!");

    }catch (error) {
        console.log(error);
        alert(`Erro ao se comunicar com o servidor. ${error}`);
    }
}

async function recuperarListaLivros() {
    try {
        const respostaSevidor = await fetch("http://localhost:3333/lista/livros");

        if (!respostaSevidor.ok) {  
            throw new Error('Erro ao comunicar com o servidor');
        }

        const listaDeLivros = await respostaSevidor.json();
        console.log(listaDeLivros)
        criarTabelaLivros(listaDeLivros)
      

    } catch (error) {
        console.log('erro ao comunicar com o servidor');
        console.log(error);
    }
}

function criarTabelaLivros(livros) {
    const tabela = document.getElementById('tabelaLivros');

    livros.forEach(livro => {
        const row = document.createElement('tr');

        const idLivro = document.createElement('td');
        idLivro.textContent = livro.idLivro;
        row.appendChild(idLivro);

        const titulo = document.createElement('td');
        titulo.textContent = livro.titulo;
        row.appendChild(titulo);

        const autor = document.createElement('td');
        autor.textContent = livro.autor;
        row.appendChild(autor);

        const editora = document.createElement('td');
        editora.textContent = livro.editora;
        row.appendChild(editora);

        const anoPublicacao = document.createElement('td');
        anoPublicacao.textContent = livro.anoPublicacao;
        row.appendChild(anoPublicacao);

        const isbn = document.createElement('td');
        isbn.textContent = livro.isbn;
        row.appendChild(isbn);

        const quantTotal = document.createElement('td');
        quantTotal.textContent = livro.quantTotal;
        row.appendChild(quantTotal);

        const quantDisponivel = document.createElement('td');
        quantDisponivel.textContent = livro.quantDisponivel;
        row.appendChild(quantDisponivel);

        const valorAquisicao = document.createElement('td');
        valorAquisicao.textContent = livro.valorAquisicao;
        row.appendChild(valorAquisicao);

        const statusLivroEmprestado = document.createElement('td');
        statusLivroEmprestado.textContent = livro.statusLivroEmprestado;
        row.appendChild(statusLivroEmprestado);

        const acoesTd = document.createElement('td');

        const atualizarIcon = document.createElement('img');
        atualizarIcon.src = './assets/icons/pencil-square.svg';
        atualizarIcon.alt = 'icone de editar';
        acoesTd.appendChild(atualizarIcon);

        const excluirIcon = document.createElement('img');
        excluirIcon.src = './assets/icons/trash-fill.svg';
        excluirIcon.alt = 'icone de excluir';
        acoesTd.appendChild(excluirIcon);
        row.appendChild(acoesTd);

        tabela.appendChild(row);

    });

    async function recuperarListaLivros(){
        try{
           const respostaServidor= await fetch('http://localhost:3333?lista/livro');

           if(respostaServidor.ok){
            const listaLivros = await respostaServidor.json();

           }
           return null;
        } catch (error){
            console.error(error);
            return null;
        }
    }
    async function criarTabelaLivros(livros){
        try{
            const tBody = document.querySelector(`tbody`);

            livros.array.forEach(livro =>{
                const tr = document.createElement('tr');

                const tdIdLivro = document.createElement('td');
                tdIdLivro.innerText = livro.idLivro;

                const tdTitulo = document.createElement('td');
                tdTitulo.innerText = livro.titulo;

                const tdAutor = document.createElement('td');
                tdAutor.innerText = livro.autor;

                const tdAcoes = document.createElement('td');
                const imgEditar = document.createElement('img');
                imgEditar.src ="./assets/icons/pencil-square.svg"
                imgEditar.alt = "Editar";
                tdAcoes.appendChild(imgEditar);

                const 
                 imgDeletar = document.createElement('img');
                
            });

        }catch (error){
            console.error(error);
            return null;
        }
    }
};