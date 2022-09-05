function start(){
  //console.log("start function");
  var buttonCalculateImc = document.querySelector("#button-calculate-imc");
  buttonCalculateImc.addEventListener("click", handleButtonClick);  

  handleButtonClick();
}

function calculateImc(weight, height){
  return weight / (height * height);
}

function handleButtonClick(){
  //console.log("clicked");
  var inputweight = document.querySelector("#input-weight");
  var inputheight = document.querySelector("#input-height");
  var imcResult = document.querySelector("#imc-result");

  //Number: serve para converter strings
  var weight = Number(inputweight.value);
  var height = Number(inputheight.value);

  var imc = calculateImc(weight,height);
  var formateImc = imc.toFixed(2).replace(".", ",");
  //toFixed é quantas casas decimais eu quero
  //textContent é para receber o conteúdo.
  imcResult.textContent = formateImc;
  //console.log(imc);

  var dateWeight = null;
  if(imc >= 16 && imc <= 16.9){
    dateWeight = "Muito abaixo do peso";
  }
  else if(imc >= 17 && imc <= 18.4){
    dateWeight = "Abaixo do peso";
  }
  else if(imc >= 18.5 && imc <= 24.9){
    dateWeight = "Peso normal";
  }
  else if(imc >= 25 && imc <= 29.9){
    dateWeight = "Acima do peso";
  }
  else if(imc >= 30 && imc <= 34.9){
    dateWeight = "Obesidade grau I";
  }
  else if(imc >= 35 && imc <= 40){
    dateWeight = "Obesidade grau II";
  }
  else if(imc >= 40 ){
    dateWeight = "Obesidade grau III";
  }else{
    dateWeight = "valor invalido";
  }

  var dateImc = document.querySelector("#date-imc");
  dateImc.textContent = dateWeight;
}


start();