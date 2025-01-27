//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Crie um array para armazenar os nomes
let amigos = []

// função para agregar a lista de amigos
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let input = document.getElementById('amigo');
    let nome = input.value.trim(); // Remove espaços desnecessários

    // Validação: verifica se o campo está vazio
    if (nome === "") {
      alert("Por favor, insira um nome.");
      return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a lista no HTML
    atualizarListaAmigos();

    // Limpa o campo de entrada
    input.value = "";
  }

  // Função para atualizar a lista exibida no HTML
  function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista antes de renderizar

    amigos.forEach(amigo => {
      let item = document.createElement('li');
      item.textContent = amigo;
      lista.appendChild(item);
    });
  }

 // Função para sortear um amigo aleatoriamente
 function sortearAmigo() {
    // Validação: verifica se o array não está vazio
    if (amigos.length === 0) {
      alert("A lista de amigos está vazia. Adicione um amigo antes de sortear.");
      return;
    }

    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome correspondente
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostra o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
  }

  // Função para capturar o evento "Enter" no campo de texto
  function capturarEnter(event) {
    if (event.key === "Enter") {
      adicionarAmigo();
    }
  }

  // Adiciona o evento ao campo de texto para capturar "Enter"
  document.getElementById('amigo').addEventListener('keydown', capturarEnter);