// Array inicial de desenhos animados dos anos 2000
let desenhosAnimados = [
  'Bob Esponja',
  'Os Padrinhos Mágicos',
  'Kim Possible',
  'As Aventuras de Jackie Chan',
  'Hora de Aventura',
  'Avatar: A Lenda de Aang',
  'Ben 10',
  'X-Men: Evolution',
  'Duck Dodgers',
  'Danny Phantom',
];

// Função para exibir a lista de desenhos animados
function exibirLista() {
  const lista = document.getElementById('lista-desenhos');
  lista.innerHTML = ''; // Limpa a lista antes de preenchê-la novamente

  desenhosAnimados.forEach((desenho) => {
    const item = document.createElement('li'); // Cria um elemento de lista <li>
    item.textContent = desenho; // Define o texto do item como o nome do desenho
    lista.appendChild(item); // Adiciona o item à lista
  });
}

// Função para adicionar um novo desenho animado à lista
function adicionarDesenho() {
  const novoDesenho = document.getElementById('novo-desenho').value; // Obtém o valor do input
  if (novoDesenho) {
    // Verifica se o input não está vazio
    desenhosAnimados.push(novoDesenho); // Adiciona o novo desenho ao array
    exibirLista(); // Atualiza a lista exibida
    document.getElementById('novo-desenho').value = ''; // Limpa o input
  }
}

// Exibir a lista quando a página carrega
document.addEventListener('DOMContentLoaded', (event) => {
  exibirLista();
});
