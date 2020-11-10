const form = document.getElementById('form');

const nomeobra = document.getElementById('nomeobra');
const autor = document.getElementById('autor');
const anoobra = document.getElementById('anoobra');
const periodoobra = document.getElementById('periodoobra');
const tipo = document.getElementById('tipo');
const detalhes = document.getElementById('detalhes');





form.addEventListener('submit',(e) =>{
  e.preventDefault();
  checkInputs();
  });
  function checkInputs(){
  const nomeobraval= nomeobra.value.trim();
  const autorval= autor.value.trim();
  const anoobraval= anoobra.value.trim();
  const periodoobraval= periodoobra.value.trim();
  const tipoval= tipo.value.trim();
  const detalhesval= detalhes.value.trim();
  const deletar='deletar';
  var st1=0;
  var st2=1;
  if(nomeobraval === ''){
      sendError(nomeobra,'nome da obra vazio');
  }else if(nomeobraval.length<6){
      sendError(nomeobra,'Numero minimo de letras 6');
  }
  else{
      sendSuccess(nomeobra);
      st1=st1+st2;
      
  }
    if(autorval === ''){
      sendError(autor,'nome do autor obra vazio');
  }else if (autorval.length<10){
      sendError(autor,'numero minimo de letras 10');
  }
  else{
      sendSuccess(autor);
      st1=st1+st2;
  }
    if(anoobraval === ''){
      sendError(anoobra,'ano da obra vazio');
  }else if(verificaNumero(anoobra)===false){
      sendError(anoobra,'Insira um ano valido');
  }else{
      sendSuccess(anoobra);
      st1=st1+st2;
  }
    if(periodoobraval === ''){
      sendError(periodoobra,'Selecione um periodo');
  }
  else{
      sendSuccess(periodoobra);
      st1=st1+st2;
  }
    if(tipoval === ''){
      sendError(tipo,'Selecione uma categoria da obra');
  }else{
      sendSuccess(tipo);
      st1=st1+st2;
  }
  if(st1===5)
  window.location="table.html?nomeobra="+nomeobra.value+"&autor="+autorval+"&anoobra="+anoobraval+"&periodoobra="+periodoobraval+"&tipo="+tipoval+"&detalhes="+detalhesval+"&deletar="+deletar;
  
  
}

function sendError(input, message){
    const formControl=input.parentElement;
    const small = formControl.querySelector('small');
    
    small.innerText=message;
    formControl.className= 'form-control error';
}

function sendSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function verificaNumero(input){
    var num=/^[0-9]+$/;
    if(input.value.match(num)){
        return true;
    }else{
        return false;
    }
}