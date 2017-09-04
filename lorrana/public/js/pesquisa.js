html = document.querySelector("html");
function pesquisa(){
  var pes = document.getElementById("pesquisa").value;
  local = localStorage.assistido;
  local = JSON.parse(local);
  for (var i = 0; i < local.length; i++) {
       if (pes == local[i].nome){
        p=document.createElement("p");
        p.textContent=local[i].avaliacao;
        html.appendChild(p);
       }
  }
}