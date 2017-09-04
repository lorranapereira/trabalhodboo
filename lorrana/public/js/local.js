
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  temp = document.getElementById("temporada");
  temp = parseInt(temp.value);
  vetor = new Array(temp-1);
  var aux=0;
  for (var i = 1; i <= temp; i++) {
    vetor[aux] = "temporada "+i+": "+ document.getElementById('episodio'+i).value+ " episodios";
    aux++;
  }
  vetor=vetor.join();
  Local.adiciona('series', {
    serie: form.serie.value,
    temporada: form.temporada.value,
    sinopse:form.sinopse.value,
    episodio: vetor
  });
  form.reset();
  e.preventDefault();
});

function clicou(){
  temp = document.getElementById("temporada");
  temp = parseInt(temp.value);
  for (var i = 1; i <= temp; i++) {
   var br=document.createElement("br");
   var conc=document.createElement('INPUT');
   var p=document.createElement("p");
   p.textContent="Temporada "+i;
   conc.value="";
   conc.type="number";
   conc.id="episodio"+i;
   conc.name="episodio"; 
   conc.min="1"; 
   conc.placeholder="Dígite quantos episodios";
   form.appendChild(p);
   form.appendChild(conc);
   form.appendChild(br);
  }
  var button=document.createElement('BUTTON');
  button.type="Submit";
  button.textContent="Salvar";
  form.appendChild(button); 
}