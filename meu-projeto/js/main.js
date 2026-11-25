document.getElementById('formContato').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  document.getElementById('feedback').textContent = 'Obrigado, ' + nome + '! Sua mensagem foi enviada.';
  this.reset();
});
