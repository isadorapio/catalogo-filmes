const form = document.getElementById('form-filme');
const lista = document.getElementById('lista-filmes');

let filmes = [];

form.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const genero = document.getElementById('genero').value;
  const ano = document.getElementById('ano').value;

filmes.push({ titulo, genero, ano });

  filmes.push({ titulo, genero });

  atualizarLista();
  form.reset();
});

function atualizarLista() {
  lista.innerHTML = '';

  filmes.forEach(function (filme) {
    const item = document.createElement('li');
    item.textContent = filme.titulo + ' - ' + filme.genero + ' (' + filme.ano + ')';
    lista.appendChild(item);
  });
}