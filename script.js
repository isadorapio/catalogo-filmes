const form = document.getElementById('form-filme');
const lista = document.getElementById('lista-filmes');

let filmes = [];

form.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const genero = document.getElementById('genero').value;

  filmes.push({ titulo, genero });

  atualizarLista();
  form.reset();
});

function atualizarLista() {
  lista.innerHTML = '';

  filmes.forEach(function (filme) {
    const item = document.createElement('li');
    item.textContent = filme.titulo + ' - ' + filme.genero;
    lista.appendChild(item);
  });
}