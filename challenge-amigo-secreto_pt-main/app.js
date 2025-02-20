//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Seleciona os elementos do DOM
const inputAmigo = document.getElementById('amigo'); // Campo de entrada de nome
const listaAmigos = document.getElementById('listaAmigos'); // Lista de participantes
const resultado = document.getElementById('resultado'); // Resultado do sorteio
const participantes = []; // Array para armazenar os participantes

// Função para adicionar um participante à lista
function adicionarAmigo() {
    const nome = inputAmigo.value.trim(); // Remove espaços em branco no início e no fim

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return; // Sai da função se o campo estiver vazio
    }

    if (participantes.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return; // Sai da função se o nome já estiver na lista
    }

    // Adiciona o nome ao array de participantes
    participantes.push(nome);

    // Limpa o campo de entrada
    inputAmigo.value = "";

    // Atualiza a lista de participantes na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de participantes na tela
function atualizarListaAmigos() {
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    // Adiciona cada participante à lista
    participantes.forEach((nome) => {
        const itemLista = document.createElement('li'); // Cria um novo item de lista
        itemLista.textContent = nome; // Define o texto do item
        listaAmigos.appendChild(itemLista); // Adiciona o item à lista
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos 2 participantes para sortear!");
        return; // Sai da função se não houver participantes suficientes
    }

    // Embaralha a lista de participantes
    const participantesEmbaralhados = embaralharLista([...participantes]);

    // Cria pares de amigos secretos
    const pares = [];
    for (let i = 0; i < participantesEmbaralhados.length; i++) {
        const amigoAtual = participantesEmbaralhados[i];
        const amigoSecreto = participantesEmbaralhados[(i + 1) % participantesEmbaralhados.length];
        pares.push(`${amigoAtual} ➔ ${amigoSecreto}`);
    }

    // Exibe o resultado na tela
    exibirResultado(pares);
}

// Função para embaralhar uma lista (algoritmo Fisher-Yates)
function embaralharLista(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]]; // Troca os elementos
    }
    return lista;
}

// Função para exibir o resultado do sorteio
function exibirResultado(pares) {
    resultado.innerHTML = ""; // Limpa o resultado anterior

    // Adiciona cada par à lista de resultados
    pares.forEach((par) => {
        const itemResultado = document.createElement('li'); // Cria um novo item de lista
        itemResultado.textContent = par; // Define o texto do item
        resultado.appendChild(itemResultado); // Adiciona o item à lista
    });
}