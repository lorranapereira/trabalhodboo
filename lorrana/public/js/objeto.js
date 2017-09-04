const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  Salvo.adiciona('assistido', {
    nome: form.nome.value,
    tempor: form.tempor.value,
    ep: form.ep.value,
    avaliacao:form.avaliacao.value
  });
  form.reset();
  e.preventDefault();
});